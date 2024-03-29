// import  { Component } from 'react';
// import PropTypes from 'prop-types';

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error('Error caught by ErrorBoundary:', errorInfo); // Используем errorInfo, который содержит информацию об ошибке
//     // Дополнительные действия, такие как отправка ошибки на сервер или логирование
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Something went wrong.</div>; // Выводим сообщение об ошибке
//     }

//     return this.props.children; // Рендерим дочерние компоненты
//   }
// }

// ErrorBoundary.propTypes = {
//   children: PropTypes.node
// };

// export default ErrorBoundary;
