<script>
    import PersonalAvatar from './PersonalAvatar.svelte';
    export let bg = '#FFAC8A';
    export let number = 1;
    export let width = 'fullwide';
    export let text = 'Enter your quote here';
  </script>
  
  <div class="personal-quote" style="background-color: {bg}; width: {width};">
    <PersonalAvatar bg={bg} number={number} />
  
    <div class="quote-text">
      <p>{text}</p>
    </div>
  </div>
  
  <style>
    .personal-quote {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .personal-quote .quote-text {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 16px;
      flex-grow: 1;
    }
  
    :global(.personal-quote .quote-text p) {
      margin: 0;
    }
  
    :global(.personal-quote.fullwide) {
      width: 100%;
    }
  
    :global(.personal-quote.long) {
      width: 512px;
    }
  
    :global(.personal-quote.small) {
      width: 320px;
    }
  </style>
  