
const contents = getNode('.contents');
const textField = getNode('#comment37');

function clearText(target) {
  target.value = "";
}

function handler(e){
  let target = e.target;
  // console.log(target);

  while(!attr(target,'data-name')){
    target = target.parentNode;

    if(target.nodeName === 'BODY'){
      target = null;
      return;
    }
  }
  // 데이터 네임을 찾을때까지 무한 반복 그래서 break가 필요함

  if(target.dataset.name === 'like'){
    console.log('like!');
    toggleClass(target,'active');
  }


  if(target.dataset.name === 'comment'){
    textField.focus();
  }

    //글을 적고 전송을 눌렀을때 consol에 뜨게
  if(target.dataset.name === 'send'){
    console.log(textField.value);

    if(textField.value === ''){
      console.log('입력해주세요.');
      return;
    }

    let template = `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">김문주</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `
    insertLast('.comment_container',template);

    clearText(textField)
  }

}

contents.addEventListener('click',handler)



textField.addEventListener('keydown',(e)=>{

  if(e.keyCode === 13){
    textField.value

    let template = `
      <div class="id">
      <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
          <div class="comment_field">
              <div class="text_container">
                  <div class="name"><a href="#">심선범</a></div>
                  <div class="text_field">${textField.value}</div>
              </div>
          </div>
      </div>
      `
      insertLast('.comment_container',template);

      clearText(textField)
  }
})


// contents.addEventListener('click',handler)


// const off = bindEvent(contents,'click', handler);















