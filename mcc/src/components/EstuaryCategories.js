import React from 'react';

const ComponentEstuaryCategories = (Props) => {
  return (
    {% for tag in site.categories %} {% capture tag_name %}{{ tag | first }}{% endcapture %}
<div id="#{{ tag_name | slugize }}"></div>
<li class="tag-head">
  <a href="{{ site.baseurl }}/blog/categories/{{ tag_name }}">{{ tag_name }}</a>
</li>
<a name="{{ tag_name | slugize }}"></a>

{% endfor %}
);
}

const styles = StyleSheet.create({
});

export default ComponentEstuaryCategories;