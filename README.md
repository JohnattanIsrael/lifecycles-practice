# Skeleton React starter Project

# React Component Lifecycle Deep Dive
>Deeper dive on https://github.com/jordanhudgens/ReactComponentLifecycleDeepDive
## Topics covered

- React router dom
- Class vs function components
- Object deconstruction
- Component lifecycle methods

### Component Life Cycle methods

[Docs](https://reactjs.org/docs/react-component.html)

**Mounting**

*These methods are called when an instance of a component is being created and inserted into the DOM:*

- constructor()
- static getDerivedStateFromProps()
- componentWillMount()
- render()
- componentDidMount()

* * *

**Updating**

*An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:*

- componentWillReceiveProps()
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

* * *

**Unmounting**

*This method is called when a component is being removed from the DOM:*

- componentWillUnmount()

* * *

**Error Handling**

*This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.*

- componentDidCatch()

* * *
