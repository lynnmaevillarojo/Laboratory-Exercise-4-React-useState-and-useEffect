Guide Questions
1. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change within a component. Props are passed from outside, while state is managed inside the component.

2. Why can a child component not modify the props it receives?

A child component cannot modify the props it receives because props are read-only in React. This helps maintain a clear flow of data between components. If the data needs to change, the parent component should update it and pass the new value to the child.

3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?

The parent component passes the onAddToCart function to the child through props. When the user clicks the Add to Cart button, the child calls that function and sends the product title back to the parent. The parent then updates the cart information using the received data.

4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?

The key prop helps React identify each item in a list and track changes when items are added, removed, or updated. Each key should be unique to avoid confusion. If keys are missing or duplicated, React may display warnings and update the wrong items or render the list incorrectly.

5. What does the children prop allow you to do that a normal prop does not?

The children prop allows us to place content inside a component's opening and closing tags. It makes the component more flexible because we can add different content, such as labels or badges, without creating a separate prop for each one. For example, we can place a "New" or "Sale" badge inside a ProductCard.