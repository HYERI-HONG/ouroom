"use strict";
var hyeri = hyeri || {};

hyeri = (() => {
    var home = () => {
        hyeri.page.h();
    };
    var add = () => {
    	hyeri.page.a();
    };
    var login = () => {
    	hyeri.page.l();
    };
    return { home : home,
    		add : add,
    		login : login };
})();
hyeri.page={
    h:()=>{
    	//메인홈
    	$('#content').empty();
    	$('<div/>').addClass('container').attr({id:"h_main"}).appendTo($('#content'));
		
		/*-------------------section1 :: banner --------------------*/
    	//캐러셀
		$('<div/>').addClass('h_section').attr({id:"section_banner"}).appendTo($('#h_main'));
		$('<div/>').addClass('carousel slide').attr({id:'carousel-example-generic','data-ride':'carousel'}).appendTo($('#section_banner'));
		
		($('<ol/>').addClass('carousel-indicators').append(
					$('<li/>').attr({'data-target':'#carousel-example-generic', 'data-slide-to':'0'}).addClass('active'),
					$('<li/>').attr({'data-target':'#carousel-example-generic', 'data-slide-to':'1'}),
					$('<li/>').attr({'data-target':'#carousel-example-generic', 'data-slide-to':'2'}),
					$('<li/>').attr({'data-target':'#carousel-example-generic', 'data-slide-to':'3'}),
					$('<li/>').attr({'data-target':'#carousel-example-generic', 'data-slide-to':'4'})
		)).appendTo($('#carousel-example-generic'));
		
		($('<div/>').addClass('carousel-inner').attr({role:'listbox'}).append(
				$('<div/>').addClass('item active').append(
						$('<div/>').addClass('h_scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner1.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('집,먹고자는 곳 이상의 무언가가 될 순 없을까?').attr({style:'font-weight:bold'}),
								$('<p/>').html('공간을 꾸미는건 쉬운일이 아니에요.<br>당신이 망설일 수 밖에 없는 이유를 적으려고 한다면 아마 끝이 없을거에요.<br>그렇지만 주저하게되는 수만가지 이유가 아니라,<br>주저하지 않고 시작해야하는 한가지 이유를 생각하셨으면 좋겠어요.')
						)
				),
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('h_scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner2.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('초보면 어때요! 계속 꾸며보는거죠.').attr({style:'font-weight:bold'}),
								$('<p/>').html('지금까지 이것저것 여러 스타일을 시도해봤지만 막상 해보니 생각했던데로 짜잔하고 완성되는건 아니더라고요.<br>그래도 계속 시도하다보면 언젠가는 짠하고 완성할 수 있는 날이 오지 않을까요?')
						)
				),
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('h_scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner3.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('삶은 온전히 나를 위해 살아갈때 가장 빛나는법').attr({style:'font-weight:bold'}),
								$('<p/>').html('어쩌면 행복한 일들보다 행복하지 않은 일들이 더 많은 게 우리의 삶이라고 하지만<br>그럼에도 불구하고 행복한 순간들은 늘 어디에나 존재한다는 걸<br>셀프 인테리어를 하면서 다시 한번 느끼게 되었어요.')
						)
				),		
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('h_scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner4.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('저한테 집은 엄마같아요.').attr({style:'font-weight:bold'}),
								$('<p/>').html('저한테 집은 마치 엄마 같은 곳이에요.<br>밖에서 힘들고 지쳐있다가도 집에 오면 편안하고 위로가 되잖아요,엄마처럼.<br>어딜 가더라도 결국 돌아오는 곳은 집이죠.')
						)
				),
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('h_scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner5.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('살아봐야 알 수 있다, 우리에게 진짜 좋은 공간은').attr({style:'font-weight:bold'}),
								$('<p/>').html('인테리어의 완성은 조화라고 생각하지만 완성이라는 말 자체가 집이라는 공간에 어울리지 않는 것 같아요.<br>살아가며 계속 바뀌는 게 집이잖아요? 가족구성원의 변화, 계절의 변화, 시간에 따라 변해가죠.<br>우리에게 진짜 좋은 공간은 살아봐야 정확하게 알 수 있어요.')
						)
				)	
		)).appendTo($('#carousel-example-generic'));
		
		
		($('<a/>').addClass('left carousel-control')
		.attr({href:'#carousel-example-generic', role:'button','data-slide':'prev'}).append(
				$('<span/>').addClass('glyphicon glyphicon-chevron-left').attr({'aria-hidden':'true'}),
				$('<span/>').addClass('sr-only').text('Previous')
		)).appendTo($('#carousel-example-generic'));
		
		($('<a/>').addClass('right carousel-control')
		.attr({href:'#carousel-example-generic', role:'button','data-slide':'next'}).append(
				$('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({'aria-hidden':'true'}),
				$('<span/>').addClass('sr-only').text('Next')
		)).appendTo($('#carousel-example-generic'));
	
	
		$('.carousel').carousel({
			  interval: 3000,
			  pause:'hover'
		});
		
		/*-------------------section2 :: direct --------------------*/
		
		$('<div/>').addClass('section').attr({id:"section_icon"}).appendTo($('#main'));
		$('<div/>').addClass('section').attr({id:"section_community"}).appendTo($('#main'));
		$('<div/>').addClass('section').attr({id:"section_category"}).appendTo($('#main'));
		$('<div/>').addClass('section').attr({id:"section_store"}).appendTo($('#main'));
		
    },
    a:()=>{
    	//회원가입
    	$('#footer').remove();
		$('#content').html('<div id="add_form" class="je_sign-in-form" >'
				+'<p id="je_font_2em" class="je_bold">회원가입</p>'
				+'        <section id="add_form_top" class="je_signup-form__social">'
				+'            <hr class="h_border">'
				+'            <p class="je_bold je_signup-form__social__title text-body-1">SNS계정으로 간편하게 회원가입</p>'
				+'            <a class="icon icon-sns-circle-md-kakao-talk je_signup-form__social__button" href="/users/auth/kakao">'
				+'					<img class="manImg" src='+$.img()+'/jieun/kakao.png ></img></a>'
				+'					<img class="manImg" src='+$.img()+'/jieun/naver.png ></img></a>'
				+'        </section>'
				+'        <hr class="h_border">'
				+'        <section id="add_form_middle" class="signup-form__email">'
				+'				<form novalidate="novalidate" class="new_normal_user" id="new_normal_user" action="/normal_users" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="HLPM6R/2QK3v2K5H9wCB/J77MnkLmliCKOrL14WRMpimvC/ZD5cJzXEowL2QhhT1VzYlCL8Valy17QKIm45yDQ==">'
				+'                    <div class="add_email">'
				+'                        <label class="je_bold" style="display:block">이메일</label>'
				+'							<input type="email" style="width:255px;display:inline" class="form-control " id="h_email" autofocus="" autocomplete="off">'
				+'                    </div>'
				+'                    <div class="add_pass" style="padding-top:20px">'
				+'                        <label class="je_bold" for="h_pass">비밀번호</label>'
				+'                        <p class="p1">8자이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.</p>'
				+'						<input class="form-control " placeholder="" type="password" id="h_pass">'
				+'                    </div>'
				+'                    <div class="add_pass_confirm" style="padding-top:20px">'
				+'                        <label class="je_bold" for="h_pass_ck">비밀번호 확인</label></br>'
				+'							<input class="form-control " type="password" id="h_pass_ck">'
				+'                        <p class="error"></p>'
				+'                    </div>'
				+'                    <div class="add_nickname" style="padding-top:15px">'
				+'                        <label class="je_bold form-label" for="nickname">별명</label>'
				+'                        <p class="p1">'
				+'                            2~15자 자유롭게 입력해주세요.'
				+'                        </p>'
				+'						<input class="form-control " type="text" id="nickname" style="width:255px;display:inline">'
				+'                    </div>'
				+'					</form></section>'
				+'        <button id="add_submit_btn" class="je_sign-in-form__form__submit btn je_btn-priority" type="submit" form="new_normal_user">'
				+'            회원가입하기'
				+'        </button>'
				+'        <p id="has-account">이미 아이디가 있으신가요?&nbsp<a class="je_bold underline" href="/users/sign_in">로그인</a></p>'
				+'    </section>'
				+'</section>'
				+'</div>'	
    	);
		
		/*생년월일*/
		$('<label/>').addClass('je_bold').html("생년월일").attr({style:"padding-top:20px"}).appendTo($('#add_form_middle'));
		$('<div/>').attr({id:"bir_wrap",style:"diplay:table; width:100%, height:34px"}).appendTo($('#add_form_middle'));
		
		
		$('<div/>').attr({class:"bir_yy",id:"bir_yy_d"}).appendTo($('#bir_wrap'));
		$('<span/>').addClass('bir_box').attr({id:"bir_yy_s"}).appendTo($('#bir_yy_d'));
		$('<select/>').addClass('bir_sel ').attr({id:"bir_year",title:"년"}).appendTo($('#bir_yy_s'));
		$('<option/>').html('년').appendTo($('#bir_year'));
		for(let i=1950;i<2018;i++){
			$('<option/>').attr({value:i+''}).html(i+'년').appendTo($('#bir_year'));
		}
	
		$('<div/>').attr({class:"bir_mm", id:"bir_mm_d"}).appendTo($('#bir_wrap'));
		$('<span/>').addClass('bir_box').attr({id:"bir_mm_s"}).appendTo($('#bir_mm_d'));
		$('<select/>').addClass('bir_sel ').attr({id:"bir_month",title:"월"}).appendTo($('#bir_mm_s'));
		$('<option/>').html('월').appendTo($('#bir_month'));
		for(let i=1;i<13;i++){
			$('<option/>').attr({value:i+''}).html(i+'월').appendTo($('#bir_month'));
		}
		$('<div/>').attr({class:"bir_dd", id:"bir_dd_d"}).appendTo($('#bir_wrap'));
		$('<span/>').addClass('bir_box').attr({id:"bir_dd_s"}).appendTo($('#bir_dd_d'));
		$('<select/>').addClass('bir_sel').attr({id:"bir_day",title:"일"}).appendTo($('#bir_dd_s'));
		$('<option/>').html('일').appendTo($('#bir_day'));
		for(let i=1;i<31;i++){
			$('<option/>').attr({value:i+''}).html(i).appendTo($('#bir_day'));
		}
		
		/*성별*/
		$('<label/>').addClass('je_bold').html("성별").attr({style:"padding-top:20px"}).appendTo($('#add_form_middle'));
		$('<div/>').attr({id:"gender_wrap"}).addClass('add_gen').appendTo($('#add_form_middle'));
		$('<select/>').addClass('gen_sel ').attr({id:"gender",title:"성별"}).appendTo($('#gender_wrap'));
		$('<option/>').html('성별').appendTo($('#gender'));
		$('<option/>').html('여자').attr({value:"여자"}).appendTo($('#gender'));
		$('<option/>').html('남자').attr({value:"남자"}).appendTo($('#gender'));
		
		/*이미지 업로드*/
		var profile;
		$('<label/>').addClass('je_bold').html("프로필 사진 업로드").attr({style:"padding-top:20px;padding-bottom:5px"}).appendTo($('#add_form_middle'));
		$('<div/>').addClass('h_imgup_con').append(
				$('<form/>').attr({enctype:'multipart/form-data',id:'h_imgup_form'}).append(
						$('<div/>').addClass('h_imgup_prev').append(
								$('<div/>').attr({id:'h_targetLayer',style:'opacity: 0.7;'}),
								$('<img/>').addClass('h_icon_choose_image').attr({src:$.img()+'/hyeri/upimageicon.png',style:'opacity:0.5'}),
								$('<div/>').addClass('h_imgup').append(
										$('<input/>').attr({type:"file",name:'h_find_img',id:'h_find_img'}).addClass('h_inputFile')
										.change(function(a) {
											let ck = (this.files[0].name.match(/jpg|gif|png|jpeg/i)) ? true : false;
											if(ck){
												profile=this.files[0].name;
												hyeri.func.iu(this);
											}else{
												alert("gif,png,jpg,jpeg 파일만 업로드 할 수 있습니다.");
											}
										})	
								)
						)
						
				)
		).appendTo($('#add_form_middle'));
		
		/*이메일, 별명 중복 체크*/
		$('<a/>').addClass('h_dupck_btn').html('중복확인<br>').appendTo($('.add_email')).click(e=>{
			$.ajax({
				url : $.context()+'/member/dpcheck',
				method : 'POST',
				contentType : 'application/json',
				data : JSON.stringify({
					attr : 'email',
					val : $('#h_email').val()
				}),
				success : d=>{
					$('#ec').remove();
					$('<h7/>').attr({style:'color:blue',id:'ec'}).html(
							(d==1)?'이미 사용중인 이메일입니다.'
									:
									($('#h_email').val().indexOf('@')<0)?'이메일형식이 올바르지 않습니다.':'사용 가능한 이메일입니다.').appendTo($('.add_email'));
				},
				error : (m1,m2,m3)=>{
					alert("error발생");
				}
			});		
			
		});
		$('<a/>').addClass('h_dupck_btn').html('중복확인<br>').appendTo($('.add_nickname')).click(e=>{
			$.ajax({
				url : $.context()+'/member/dpcheck',
				method : 'POST',
				contentType : 'application/json',
				data : JSON.stringify({
					attr : 'nickname',
					val : $('#nickname').val()
				}),
				success : d=>{
					$('#nc').remove();
					$('<h7/>').attr({style:'color:blue',id:'nc'}).html((d==1)?'이미 사용중인 별명입니다.':'사용 가능한 별명입니다.').appendTo($('.add_nickname'));
				},
				error : (m1,m2,m3)=>{
					alert("error발생");
				}
			});		
			
		});
		
		//회원가입버튼 클릭
		$('#add_submit_btn').click(e=>{
			e.preventDefault();
			//입력값 유무 체크
			let ck=true;
			let arr=[
				{c:'add_email',i:'#h_email'},
				{c:'add_pass',i:'#h_pass'},
				{c:'add_pass_confirm',i:'#h_pass_ck'},
				{c:'add_nickname',i:'#nickname'},
				{c:'add_gen',i:'#gender'}
				];
			$.each(arr,(x,j)=>{
				$('<h7/>').attr({style:'color:red',id:j.c}).appendTo($('.'+j.c));
				if($(j.i).val()==''||$(j.i).val()=='성별'){
					$('#'+j.c).html('필수 값을 입력하세요.');
					ck=false;
				}else{
					$('#'+j.c).html('');
				}
				if(j.c=='add_pass_confirm'){
					if($('#h_pass').val()!=$('#h_pass_ck').val()){
						$('#'+j.c).html('비밀번호가 일치하지 않습니다.');	
						ck=false;
					}
				}
				if(j.c=='add_email'){
					if($('#h_email').val()!=''&&$('#h_email').val().indexOf('@')<0){
						$('#'+j.c).html('이메일 형식이 올바르지 않습니다.');	
						ck=false;
					}
				}
			});
			$('#add_bir').remove();
			if($('#bir_year').val()=='년'||$('#bir_month').val()=='월'||$('#bir_day').val()=='일'){
				$('<h7/>').attr({style:'color:red',id:'add_bir'}).html('생년월일을 모두 선택하세요.').appendTo($('#bir_wrap'));
				ck=false;
			}
			//submit
			let d = new Date();
			if(ck){
				$.ajax({
					url : $.context()+'/member/add',
					method : 'POST',
					contentType : 'application/json',
					data : JSON.stringify({
						email : $('#h_email').val(),
						password : $('#h_pass').val(),
						nickname : $('#nickname').val(),
						birthday : $('#bir_year').val()+'-'+$('#bir_month').val()+'-'+$('#bir_day').val(),
						gender  : $('#gender').val(),
						profile : profile,
						join_date : d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
					}),
					success : d=>{
						if(d==1){
							alert("회원가입 성공");
							hyeri.page.l();
						}
						else{
							alert("회원가입 실패");
						}
					},
					error : (m1,m2,m3)=>{
						alert("error발생");
					}
				});		
			}
		});
		$('#has-account').click(e=>{
			e.preventDefault();
			hyeri.page.l();
		});
    },
    l:()=>{
    	//로그인
    	$('#footer').remove();
		$('#content').html('<div class="je_sign-in-form" >'
				+ '<h1 class="je_sign-in-form__header">'
				+ '<a id="main_btn" class="je_sign-in-form__header__link" href="#">'
				+ '<span style=" margin-left: auto; margin-right: auto;  display: block;">'
				+ ' <img class="je_manImg" src='
				+ $.img()
				+ '/jieun/logo1.jpg ></img></span>'
				+ '</a>    </h1>'
				+ '<form class="je_sign-in-form__form" id="new_user">'
				+ '<input placeholder="이메일" autofocus="autofocus" class="je_sign-in-form__form__input form-control sign-in-form__form__email" type="text" name="user[email]" id="user_email">'
				+ '<div id="h_rs" class="je_sign-in-form__form__input-wrap je_sign-in-form__form__password">'
				+ '<input placeholder="비밀번호" autocomplete="off" class="je_sign-in-form__form__input form-control" type="password" name="user[password]" id="user_password">'
				+ '</div>'
				+ '<input type="hidden" name="remember_me" id="remember_me" value="checked">'
				+ '<input type="hidden" name="is_pro" id="is_pro" value="false">'
				+ '<input id="login_btn1" type="button" name="commit" value="로그인" class="je_sign-in-form__form__submit btn je_btn-priority" data-disable-with="로그인">'
				+ '</form>    <div class="je_sign-in-form__action">'
				+ '<a id="pwup_btn1" class="je_sign-in-form__action__entry" href="/users/password/new">비밀번호 재설정</a>'
				+ '<a id="join_btn1" class="je_sign-in-form__action__entry" href="#">회원가입</a>'
				+ '</div>'
				+ '<section class="je_sign-in-form__sns">'
				+ '<div class="je_sign-in-form__sns__list">'
				+ '<p style="font-size:80%; color:gray;">SNS계정으로 간편 로그인/회원가입</p>'
				+ '<img class="manImg" src='
				+ $.img()
				+ '/jieun/kakao.png ></img></a>&nbsp&nbsp&nbsp'
				+ '<img class="manImg" src='
				+ $.img()
				+ '/jieun/naver.png ></img></a>'
				+ '       <a class="je_sign-in-form__sns__entry" href="/users/auth/kakao">'
				+ '<span class="icon-page-login__c-3" aria-label="카카오계정으로 로그인"></span>'
				+ '</a>          <a class="je_sign-in-form__sns__entry" href="/users/auth/naver">'
				+ '<span class="icon-page-login__e-3" aria-label="네이버 아이디로 로그인"></span>'
				+ '</a>        </div>' + '</section>' + '</div>'
		);
		
		$('#login_btn1').click(e=>{
			e.preventDefault();
			$('<h7/>').attr({style:'color:red',id:'h_rsh'}).empty().appendTo($('#h_rs'));
			if($('#user_email').val()==''||$('#user_password').val()==''){
				$('#h_rsh').html('이메일과 비밀번호를 모두 입력해주세요.');
			}else{
				$.ajax({
					url : $.context()+'/member/login',
					method : 'POST',
					contentType : 'application/json',
					data : JSON.stringify({
						email : $('#user_email').val(),
						password : $('#user_password').val(),
					}),
					success : d=>{
						if(d.idValid==='WRONG'){
							$('#h_rsh').html('일치하는 이메일이 없습니다.');
						}else if(d.pwValid==='WRONG'){
							$('#h_rsh').html('비밀번호를 잘못 입력했습니다.');
						}else{
							//브라우저닫으면 없어지는 세션 쿠키 생성		
							$.cookie('userid', d.value.email);
							//쿠키삭제하기,true/false반환
							//$.removeCookie('userid');
							hyeri.page.h();
						}
					},
					error : (m1,m2,m3)=>{
						alert("error발생");
					}
				});		
			}
		});
		$('#join_btn1').click(e=>{
			e.preventDefault();
			hyeri.page.a();
		});
		$('.je_manImg').click(e=>{
			e.preventDefault();
			hyeri.page.h();
		});
		$('#pwup_btn1').click(e=>{
			e.preventDefault();
			alert("비밀번호 재설정 클릭");
		});
    }
};
hyeri.func ={
		//기능 분리
		iu: d =>{
			//이미지 업로드시 업로드한 파일 임시 저장 기능, 이미지 미리보기
				var fd = new FormData();
				fd.append('file',d.files[0]);
				$.ajax({
					url: $.context()+'/member/upload',
					type: 'POST',
		            data: fd,
		            async: false,
		            cache: false,
		            contentType: false,
		            processData: false
				}).done(function(){
					 if (d.files[0]) {
					        var fileReader = new FileReader();
					        fileReader.onload = function (e) {
					            $('#blah').attr('src', e.target.result);
								$("#h_targetLayer").html('<img src="'+e.target.result+'" width="200px" height="200px" class="h_upload-preview" />');
								$(".h_icon_choose_image").attr({style:'opacity:0 !important'});
					        }
							fileReader.readAsDataURL(d.files[0]);
					    }
				});
		}
}



