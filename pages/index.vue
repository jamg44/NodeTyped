<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p>Welcome to {{ title }}</p>
    <p>Node.js with Typescript & Nuxt seed.</p>

    <div class="panel">
        <h3>Mongoose</h3>
        <ol>
            <li>Start mongodb</li>
            <li>Run 'npm run loadMocks'</li>
            <li><a href="products">Mongoose example</a></li>
        </ol>
    </div>

    <div class="panel">
        <h3>Nuxt examples:</h3>
        <ol>
            <li>
              <nuxt-link to="users">Users</nuxt-link>
            </li>
        </ol>
    </div>

    <div class="panel">
        <h3>API</h3>
        <p>API examples:</p>
        <ul>
            <li><a href="apiv1/users">List of users</a></li>
            <li><a href="apiv1/products">List of products</a></li>
            <li><a href="apiv1/products/near/8000/lon/-73.93414657/lat/40.82302903">List of products near a point</a></li>
        </ul>
    </div>

    <nav class="nav nav-tabs" id="myTab" role="tablist">
      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-expanded="true">Home</a>
      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile">Profile</a>
      <div class="dropdown">
        <a class="nav-item nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" id="nav-dropdown1-tab" href="#nav-dropdown1" role="tab" data-toggle="tab" aria-controls="nav-dropdown1">@fat</a>
          <a class="dropdown-item" id="nav-dropdown2-tab" href="#nav-dropdown2" role="tab" data-toggle="tab" aria-controls="nav-dropdown2">@mdo</a>
        </div>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">home</div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">profile</div>
      <div class="tab-pane fade" id="nav-dropdown1" role="tabpanel" aria-labelledby="nav-dropdown1-tab">dd1</div>
      <div class="tab-pane fade" id="nav-dropdown2" role="tabpanel" aria-labelledby="nav-dropdown2-tab">dd2</div>
    </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    return { title: 'NodeTyped Nuxt' }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped>
</style>
