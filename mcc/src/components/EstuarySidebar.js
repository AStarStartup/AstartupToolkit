import React from 'react';

const ComponentEstuarySidebar = (Props) => {
  return (
    <div class="col-lg-4">
  <div class="card">
    <div class="card-header">About</div>
    <div class="card-body text-dark">
      <!-- Your Bio -->
      <p> {{ site.author_bio }}</p>
      {%- include github_star_button.html -%}
    </div>
  </div>
  <div class="card">
    <div class="card-header">Categories</div>
    <div class="card-body text-dark">
      {%- include estuary_categories.html -%}
    </div>
  </div>
</div>
  );
}

const styles = StyleSheet.create({
});

export default ComponentEstuarySidebar;