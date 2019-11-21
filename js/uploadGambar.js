$.fn.uploadGambar = function () {
	this.change(function () {
		if (this.files.length > 0) {
			var nama = this.files[0].name;
			var ukuran = this.files[0].size;

			if (this.files && this.files[0]) {
			    var reader = new FileReader();

			    reader.onload = function (e) {
			        $('#image_upload_preview').attr('src', e.target.result);
			    }

			    reader.readAsDataURL(this.files[0]);
			}

			var size = "";
			if (ukuran >= 1000000) {
				ukuran = Math.ceil(ukuran/1000000);
				size = ukuran + "MB";
			}
			else if(ukuran >= 1000){
				ukuran = Math.ceil(ukuran/1000);
				size = ukuran + "KB";
			}
			else if(ukuran < 1000){
				size = ukuran + "Byte";
			}

			$("#info_file").html(`
				<p>Nama file : `+nama+`</p>
				<p>Ukuran file : `+size+`</p>
			`);
		}
	});
}