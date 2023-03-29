<!-- src/routes/About.svelte -->
<script>
import Button from '$lib/components/Button.svelte';
  </script>
  
  <style>
    /* Add your component-specific styles here, if needed */
  </style>
  
  <main>
    <h1>Cats</h1>
    <p>Welcome to the my cats page!</p>
    <section>
      <div class="kitties">
          <div class="kitties-images">
              <img src="images/kitty-bulka.png" alt="Bulka cat">
              <img src="images/kitty-kava.png" alt="Kava cat">
              <img src="images/kitty-mo.png" alt="Mo cat">
              <img src="images/kitty-zuki.png" alt="Zuki cat">
              <img src="images/kitty-ceks.png" alt="Ceks cat">
          </div>
          <Button projectUrl="https://www.instagram.com/psy_koteiky/" size="default" width="fitcontent" variant="primary">Follow on Instagram</Button>
      </div>
  </section>
  </main>