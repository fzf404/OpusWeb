$(function () {
  activeURL = "/api/active"
  // 渲染card
  $('.article').load('/src/card/card.html', () => {
    $.ajax(activeURL, {
      method: 'GET',
      // 得到响应的处理
      success: data => {
        $.each(data.data.articles, (index, item) => {
          username = item.username
          title = item.title
          subtitle = item.subtitle
          arttype = item.arttype
          headimg = item.headimg
          likes = item.likes
          share = item.share
          issuper = item.super

          $(`#${index} .username`).text(username)
          $(`#${index} .card-title`).text(title)
          $(`#${index} .subtitle`).html('&emsp;&emsp;' + subtitle)
          $(`#${index} .arttype`).text(arttype)
          $(`#${index} img`).attr('src', headimg)
          $(`#${index} .likes`).text(likes)
          $(`#${index} .share`).text(share)

          if (issuper == true) {
            $(`#${index} .badage-art`).text('精品')
            $(`#${index} .badage-art`).removeClass('badge-primary')
            $(`#${index} .badage-art`).addClass('badge-success')
          } else {
            $(`#${index} .badage-art`).text('推荐')
          }
        })
      },
      error: ()=>{
        $('#cards').html(`<h4 class="alert alert-danger m-3 text-center lead">服务器连接失败，可能正在维护，刷新重试或请联系管理员...</h4>`)
      }
    })
  })
})