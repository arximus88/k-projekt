<script>
    export let bg = '#FFAC8A';
    export let number = Math.floor(Math.random() * 12) + 1;
  
    const style = `background-color: ${bg}`;
  </script>

  <div class="avatar" style={style}>
    <img src={`/images/avatars/avatar-${number}.png`} srcset="/images/avatars/avatar-{number}.png 1x, /images/avatars/avatar-{number}@2x.png 2x" alt="borys-avatar" />
  </div>

  <style>
    .avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      z-index: 2;
      flex-shrink: 0;
    }
  
    img {
      width: 100%;
      height: 100%;
    }
  </style>
  