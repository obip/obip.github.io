---
widget: portfolio
headless: true

# Order that this section appears on the page.
weight: 20

title: 'OMI Work Packages'
subtitle: ''

content:
  # Page type to display. E.g. project.
  page_type: work-package

  # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  filter_default: 0

  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove the toolbar, delete the entire `filter_button` block.
  filter_button:
    - name: All
      tag: '*'
    - name: Specification
      tag: Specification
    - name: Implementation
      tag: Implementation
    - name: Evaluation
      tag: Evaluation

  sort_by: 'Title'
  sort_ascending: true

design:
  columns: '1'
  view: masonry
  flip_alt_rows: true
  background: {}
  spacing: {padding: [0, 0, 0, 0]}
---