<script>
    export let bg = '#FFAC8A';
    export let number = Math.floor(Math.random() * 12) + 1;
  
    const style = `background-color: ${bg}`;
  </script>
  
  <div class="avatar" style={style}>
    <img src={`images/avatar-${number}.png`} alt="avatar" />
  </div>
  
  <style>
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    img {
      width: 80%;
      height: 80%;
      border-radius: 50%;
    }
  </style>
  