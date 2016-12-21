
accessid = ''
accesskey = ''
host = ''
policyBase64 = ''
signature = ''
callbackbody = ''
filename = ''
key = ''
expire = 0
g_object_name = ''
g_object_name_type = ''
multi_pic = true
now = timestamp = Date.parse(new Date()) / 1000;
function send_request()
{
    var xmlhttp = null;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlhttp!=null)
    {
        serverUrl = 'http://m.jjys168.com/oss.php'
        xmlhttp.open( "GET", serverUrl, false );
        xmlhttp.send( null );
        return xmlhttp.responseText
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
};

function check_object_radio() {
    /*var tt = document.getElementsByName('myradio');
    for (var i = 0; i < tt.length ; i++ )
    {
        if(tt[i].checked)
        {
            g_object_name_type = tt[i].value;
            break;
        }
    }*/
    g_object_name_type = 'random_name'; //默认为随机名吧，防止中文错误
}

function get_signature()
{
    //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
    now = timestamp = Date.parse(new Date()) / 1000;
    if (expire < now + 3)
    {
        body = send_request()
        var obj = eval ("(" + body + ")");
        host = obj['host']
        policyBase64 = obj['policy']
        accessid = obj['accessid']
        signature = obj['signature']
        expire = parseInt(obj['expire'])
        callbackbody = obj['callback']
        key = obj['dir']
        console.log(key);
        return true;
    }
    return false;
};

function random_string(len) {
　　len = len || 32;
　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
　　var maxPos = chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
    　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function get_suffix(filename) {
    pos = filename.lastIndexOf('.')
    suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix;
}

function calculate_object_name(filename)
{
    if (g_object_name_type == 'local_name')
    {
        g_object_name += "${filename}"
    }
    else if (g_object_name_type == 'random_name')
    {
        suffix = get_suffix(filename)
        g_object_name = key + random_string(10) + suffix
    }
    return ''
}

function get_uploaded_object_name(filename)
{
    if (g_object_name_type == 'local_name')
    {
        tmp_name = g_object_name
        tmp_name = tmp_name.replace("${filename}", filename);
        return tmp_name
    }
    else if(g_object_name_type == 'random_name')
    {
        return g_object_name
    }
}

function set_upload_param(up, filename, ret)
{
    if (ret == false)
    {
        ret = get_signature()
    }
    g_object_name = key;
    if (filename != '') {
        suffix = get_suffix(filename)
        calculate_object_name(filename)
    }
    new_multipart_params = {
        'key' : g_object_name,
        'policy': policyBase64,
        'OSSAccessKeyId': accessid,
        'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
        'callback' : callbackbody,
        'signature': signature,
    };

    up.setOption({
        'url': host,
        'multipart_params': new_multipart_params
    });

    up.start();
}

var uploader = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'selectfiles_multi',
    //multi_selection: false,
	container: document.getElementById('container'),
	flash_swf_url : '/cssjs/js/lib/plupload-2.1.2/js/Moxie.swf',
	silverlight_xap_url : '/cssjs/js/lib/plupload-2.1.2//js/Moxie.xap',
    url : 'http://oss.aliyuncs.com',
    filters: {
        mime_types : [ //只允许上传图片和zip,rar文件
            { title : "Image files", extensions : "jpg,gif,png,bmp" },
        ],
        max_file_size : '4mb', //最大只能上传10mb的文件
        prevent_duplicates : true //不允许选取重复文件
    },

	init: {
		PostInit: function() {
			//document.getElementById('ossfile').innerHTML = '';
			/*document.getElementById('postfiles').onclick = function() {
            set_upload_param(uploader, '', false);
            return false;
			};*/
		},

		FilesAdded: function(up, files) {
			plupload.each(files, function(file) {
				/*document.getElementById('ossfile').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>'
				+'<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>'
				+'</div>';
*/                set_upload_param(uploader, '', false);
			});
		},

		BeforeUpload: function(up, file) {
            check_object_radio();
            set_upload_param(up, file.name, true);
        },

		UploadProgress: function(up, file) {

		},

		FileUploaded: function(up, file, info) {
            if (info.status == 200)
            {
                var absPath =  "http://upload.ddys168.com/" + get_uploaded_object_name(file.name);
                if(multi_pic==true){
                    var html = '<div class="input-group pull-left" style="margin-top:.5em;margin-right:30px;"><input type="hidden" name="pics[]" value="'+get_uploaded_object_name(file.name)+'" />'+
                        '<img class="img-responsive img-thumbnail" src="'+absPath+'" width="50"/>'+
                        '<em class="close" onclick="deleteImage(this)" style="position:absolute; top: 0px; right: -14px;" title="删除这张图片">×</em></div>';
                    console.log(html);
                    $(html).appendTo('.image-container');
                    html = '';
                }else{
                    //var absPath =  "http://upload.ddys168.com/" + get_uploaded_object_name(file.name);
                    $('img.img-thumbnail').attr('src',absPath);
                    $('input[name=thumb]').val(get_uploaded_object_name(file.name));
                }
                console.log(file.name)
            }
            else
            {
                alert('上传失败');
                console.log(info.response);
                //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
            }
		},

		Error: function(up, err) {
            if (err.code == -600) {
                document.getElementById('text-warning').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
            }
            else if (err.code == -601) {
                document.getElementById('text-warning').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
            }
            else if (err.code == -602) {
                document.getElementById('text-warning').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
            }
            else
            {
                document.getElementById('text-warning').appendChild(document.createTextNode("\nError xml:" + err.response));
            }
		}
	}
});

uploader.init();
