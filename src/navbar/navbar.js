$(function () {
  myinfoURL = '/api/myinfo'
  // 加载navbar
  $('#navbar').load('/src/navbar/navbar.html', () => {
    url = window.location.href
    if (url == "http://opus.fzf404.top/") {
      $('#home').addClass('active');
    } else if (url == "http://opus.fzf404.top/login/") {
      // 修改navbar
      $("#login-link").addClass("d-none");
      $("#navbar-login").removeClass('d-none');
      $("#navbar-register").removeClass('d-none');
      $("#register-box").hide(0);

      $("#navbar-login").click(function () {
        console.log('123123');
        $("#register-box").hide("0");
        $("#login-box").fadeIn("slow");
      })

      $("#navbar-register").click(function () {
        $("#login-box").hide("0");
        $("#register-box").fadeIn("slow");
      })
      return
    } else if (url == "http://opus.fzf404.top/edit/") {
      $('#edit').addClass('active');
    }
    // 判断是否登录
    if (window.localStorage.getItem('token') == null) {
      return
    }

    $.ajax(myinfoURL, {
      method: 'POST',
      beforeSend: xhr => {
        token = window.localStorage.getItem('token');
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        if (data.code == "200") {
          $('#login-link').addClass('d-none')
          $('#userinfo').removeClass('d-none')
          $('#userinfo a').text(data.data.user.name)
        }
      }
    })
  })
})
