### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import Toaster from 'unify-react-mobile/build/Toaster'` on top of your code.
3. Code your `<Toaster />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Toaster />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| error   | Props for making error toaster styles   | bool            | **false**, true
| display   | Props to display the toaster   | bool            | **false**, true
| actionText   | Props for adding action text to toaster   | string            | **""**
| onActionClick   | Props for adding click function to action text on toaster   | func            | -
| onSwipeDown   | Props for adding swipe down function on toaster   | func            | -
| children   | Props for give toaster text   | string            | **""**
