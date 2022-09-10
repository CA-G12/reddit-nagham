CKEDITOR.replace('editor', {
    width: '70%',
    height: 300,
    removeButtons: 'PasteFromWord',
    extraPlugins:'filebrowser',
        filebrowserBrowseUrl:'/list',//upload location
        filebrowserUploadMethod:'form',
        filebrowserUploadUrl:'/upload'//route
  });

    // ClassicEditor
    //     .create( document.querySelector( '#editor' ) )
    //     .catch( error => {
    //         console.error( error );
    //     } );



  const content = document.querySelector('.login-signup');


  const headerInformation = (info)=>{
    if(info.msg){
      console.log('Error Messege');
    }else{
     content.textContent = "";
     content.innerHTML = `
     <a href="/logout" class="logout btn">Logout</a></li>
     <div class="userNameImage">
         <div class="userName">${info.user_fullname}</div>
         <div class="userImg"><img src="${info.user_img}" alt=""></div>
     </div>
 
     `;
    }
 }
 
 fetch('/isloged')
 .then(data=>data.json())
 .then(headerInformation);