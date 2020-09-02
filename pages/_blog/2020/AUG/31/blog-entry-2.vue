<template lang='pug'>
  div.use-transition
    .page-container.blog-layout
      h1.title {{title}}
      h5.subtitle {{subtitle}}
      p.author By {{author}}
      RouteBack
      hr
      .content(v-if='!!content')
        div(v-html="$md.render(content)")   
    Footer   
</template>

<script>
import {metadata} from '../../../../../static/constants'
const title = `Blog Entry 2`,
      subtitle = 'subtitle',
      author = 'Allen Royston'


export default {
  transition(to, from) {            
    return 'slide-left'
  },
  data: function () {
    return {
      title,
      subtitle,
      author,
      content: null
    }
  },
  head: {
    title: `${metadata.siteHeader} - ${title}`,
    meta: [
      { 
        hid: 'description', 
        name: 'description', 
        content: 'A short description about the blog page' 
      }
    ]
  },  
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({content: `

## Blog Entry
⭐ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Dui vivamus arcu felis bibendum ut tristique et. Enim nec dui nunc mattis. Enim sit amet venenatis urna cursus. Ac tortor dignissim convallis aenean et tortor. Porttitor massa id neque aliquam vestibulum morbi blandit. Lacinia at quis risus sed vulputate odio ut enim blandit. Feugiat nisl pretium fusce id. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Pulvinar sapien et ligula ullamcorper malesuada proin. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Cras ornare arcu dui vivamus arcu felis bibendum.

Morbi tristique senectus et netus et malesuada fames ac. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Enim tortor at auctor urna nunc id cursus metus. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Fermentum posuere urna nec tincidunt praesent. Eget aliquet nibh praesent tristique. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat duis. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Sed id semper risus in hendrerit gravida rutrum quisque.

Sed odio morbi quis commodo odio. Elit eget gravida cum sociis natoque. Sed blandit libero volutpat sed cras. Placerat vestibulum lectus mauris ultrices eros in. Augue mauris augue neque gravida in fermentum et sollicitudin. Euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci. Sollicitudin nibh sit amet commodo nulla. Et malesuada fames ac turpis. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Auctor augue mauris augue neque gravida in fermentum et. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vehicula ipsum a arcu cursus vitae. Pretium viverra suspendisse potenti nullam ac tortor vitae purus.

Neque viverra justo nec ultrices dui sapien eget. Laoreet suspendisse interdum consectetur libero id. Enim nunc faucibus a pellentesque. Aenean euismod elementum nisi quis eleifend quam adipiscing. Quis viverra nibh cras pulvinar mattis. Id aliquet lectus proin nibh. Blandit libero volutpat sed cras ornare arcu. Netus et malesuada fames ac. Arcu felis bibendum ut tristique et. Urna duis convallis convallis tellus. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Aliquet nec ullamcorper sit amet risus nullam eget. Quis vel eros donec ac odio tempor orci dapibus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Orci dapibus ultrices in iaculis nunc sed augue. Lobortis scelerisque fermentum dui faucibus. Dignissim diam quis enim lobortis scelerisque. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.

Nisi lacus sed viverra tellus. Justo nec ultrices dui sapien eget mi proin sed libero. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Donec et odio pellentesque diam volutpat. Consectetur a erat nam at lectus urna duis. Orci dapibus ultrices in iaculis. Odio tempor orci dapibus ultrices in. Sit amet est placerat in egestas erat imperdiet sed euismod. Id interdum velit laoreet id donec. Feugiat vivamus at augue eget arcu dictum varius duis at. Nibh tortor id aliquet lectus proin nibh. Risus viverra adipiscing at in.



        `})
      }, 1000)
    })
  }
}
</script>


