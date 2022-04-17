<template>
  <section id="content">
    <div class="main">
      <section id="about">
        <h1>DecShar<span class="emoji">⚡</span></h1>
        <p>NFT Share File powered by IPFS Protocol. Build with <a href="https://v3.vuejs.org/" target="_blank" rel="noopener">Vue 3</a> and
          <a href="https://vitejs.dev/" target="_blank" rel="noopener">ViteJS</a>.</p>
        
        <p>Build with <i-ri-heart-2-fill class="icon-love" /> by <a href="https://github.com/AndOr0812/DecShear" rel="noopener" class="author">Seif Abaza</a></p>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "VAbout",
}
</script>

<style lang="scss">
section#content .main {
  section#about {
    width: 70vw;
    height: auto;

    h1 {
      img {
        display: inline-block;
      }
    }

    a {
      color: var(--contrast-color);
      font-weight: bold;
      border-bottom: 1px solid var(--contrast-color);
      text-decoration: none;

      &.author {
        padding: 6px 12px;
        border-radius: 8px;
        background-color: var(--gradient-100);
        color: var(--icon-color);
        font-size: 0.85rem;

        border-bottom: none;
      }
    }

    p {
      line-height: 1.7;
    }

    .icon-love {
      color: #e91e1e;
      display: inline;
      vertical-align: middle;
    }
  }
}

body.dark-theme {
  section#content .main section#about .author {
    background-color: var(--gradient-800);
  }
}
</style>