# Component Styles v1.0.0

TODO: Add description

## Installation

`npm install component-styles`

```stylus
@import 'path/to/node_modules/component-styles'
```

## Features

  1. [Component](#component)
    - [Nested component](#nested-component)
    - [Sibling component (adjacent)](#sibling-component-adjacent)
    - [Sibling component (general)](#sibling-component-general)
    - [Child component (direct descendant)](#child-component-direct-descendant)
  2. [Element](#element)
    - [Sibling element (adjacent)](#sibling-element-adjacent)
    - [Sibling element (general)](#sibling-element-general)
    - [Child element (direct descendant)](#child-element-direct-descendant)
  3. [Modifier](#modifier)
    - [Parent modifier](#parent-modifier)
    - [Component modifier](#component-modifier)
  4. [Pseudo](#pseudo)
    - [Parent pseudo](#parent-pseudo)
    - [Component pseudo](#component-pseudo)
  5. [Utility](#utility)

### Component

##### Basic usage

```stylus
+component('Button')
  // 1

+component('Panel', 'Card')
  // 2
```

```css
.Button {
  /* 1 */
}
.Panel,
.Card {
  /* 2 */
}
```

[Back to Features](#features)

##### Nested component

```stylus
+component('Card')
  +component('Icon')
    // 1
```

```css
.Card .Icon {
  /* 1 */
}
```

[Back to Features](#features)

##### Sibling component (adjacent)

```stylus
+component('Card')
  +sibling-component('Panel')
    // 1

  +sibling-component('Panel', 'Avatar')
    // 2
```

```css
.Card + .Panel {
  /* 1 */
}
.Card + .Panel,
.Card + .Avatar {
  /* 2 */
}
```

[Back to Features](#features)

##### Sibling component (general)

```stylus
+component('Card')
  +general-sibling-component('Panel')
    // 1

  +general-sibling-component('Panel', 'Avatar')
    // 2
```

```css
.Card ~ .Panel {
  /* 1 */
}
.Card ~ .Panel,
.Card ~ .Avatar {
  /* 2 */
}
```

[Back to Features](#features)

##### Child component (direct descendant)

```stylus
+component('Card')
  +child-component('Panel')
    // 1

  +child-component('Panel', 'Avatar')
    // 2
```

```css
.Card > .Panel {
  /* 1 */
}
.Card > .Panel,
.Card > .Avatar {
  /* 2 */
}
```

[Back to Features](#features)

### Element

##### Basic usage

```stylus
+component('Panel')
  +element('header')
    // 1

  +element('header', 'footer')
    // 2

  +element('footer')
    +element('text')
      // 3

  +element('header', 'footer')
    +element('text')
      // 4
```

```css
.Panel-header {
  /* 1 */
}
.Panel-header,
.Panel-footer {
  /* 2 */
}
.Panel-footer-text {
  /* 3 */
}
.Panel-header-text,
.Panel-footer-text {
  /* 4 */
}
```

[Back to Features](#features)

##### Sibling element (adjacent)

```stylus
+component('Panel')
  +element('header')
    +sibling-element('footer')
      // 1

    +sibling-element('body', 'footer')
      // 2
```

```css
.Panel-header + .Panel-footer {
  /* 1 */
}
.Panel-header + .Panel-body,
.Panel-footer + .Panel-footer {
  /* 2 */
}
```

[Back to Features](#features)

##### Sibling element (general)

```stylus
+component('Panel')
  +element('header')
    +general-sibling-element('footer')
      // 1

    +general-sibling-element('body', 'footer')
      // 2
```

```css
.Panel-header ~ .Panel-footer {
  /* 1 */
}
.Panel-header ~ .Panel-body,
.Panel-footer ~ .Panel-footer {
  /* 2 */
}
```

[Back to Features](#features)

##### Child element (direct descendant)

```stylus
+component('Panel')
  +child-element('content')
    // 1

  +child-element('header', 'footer')
    // 2
```

```css
.Panel > .Panel-content {
  /* 1 */
}
.Panel > .Panel-header,
.Panel > .Panel-footer {
  /* 2 */
}
```

[Back to Features](#features)

### Modifier

##### Basic usage

```stylus
+component('Button')
  // 1
  +modifier('primary')
    // 2
    +modifier('active')
    // 3
  +modifier('warning', 'outline')
    // 4
```

```css
.Button {
  /* 1 */
}
.Button.\*primary {
  /* 2 */
}
.Button.\*primary.\*active {
  /* 3 */
}
.Button.\*warning.\*outline {
  /* 4 */
}
```

[Back to Features](#features)

##### Parent modifier

```stylus
+component('Panel')
  +element('body')
    +element('list')
      +element('item')
        +element('icon')
          +parent-modifier('primary')
            // 1

          +parent-modifier('primary', 'outline')
            // 2
```

```css
.Panel-body-list-item.\*primary .Panel-body-list-item-icon {
  /* 1 */
}
.Panel-body-list-item.\*primary.\*outline .Panel-body-list-item-icon {
  /* 2 */
}
```

[Back to Features](#features)

##### Component modifier

```stylus
+component('Panel')
  +element('body')
    +element('list')
      +element('item')
        +element('icon')
          +component-modifier('primary')
            // 1

          +component-modifier('primary', 'outline')
            // 2

          +modifier('awesome')
            +component-modifier('primary')
              // 3
```

```css
.Panel.\*primary .Panel-body-list-item-icon {
  /* 1 */
}
.Panel.\*primary.\*outline .Panel-body-list-item-icon {
  /* 2 */
}
.Panel.\*primary .Panel-body-list-item-icon.\*awesome {
  /* 3 */
}
```

[Back to Features](#features)

### Pseudo

##### Basic usage

```stylus
+component('Panel')
  +pseudo('hover')
    // 1
```
```css
.Panel:hover {
  /* 1 */
}
```

[Back to Features](#features)

##### Parent pseudo

```stylus
+component('Panel')
  +element('header')
    +element('text')
      +parent-pseudo('hover')
        // 1
```
```css
.Panel-header:hover .Panel-header-text {
  /* 1 */
}
```

[Back to Features](#features)

##### Component pseudo

```stylus
+component('Panel')
  +element('header')
    +element('text')
      +component-pseudo('hover')
        // 1
```
```css
.Panel:hover .Panel-header-text {
  /* 1 */
}
```

[Back to Features](#features)

### Utility

```stylus
+utility('hidden')
  // 1
```

```css
#component-styles .\+hidden {
  /* 1 */
}
```

[Back to Features](#features)
