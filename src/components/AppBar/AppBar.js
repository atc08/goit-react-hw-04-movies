import React from 'react';
import Navigation from '../Navigation';
// import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header>
      <Navigation />
    </header>
  );
};

// class AppBar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = e => {
//     this.setState({ query: e.target.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.query.trim() === '') {
//       // toast.warn('Enter your query');
//       this.setState({ query: '' });
//       return;
//     }

//     this.props.onChange(this.state.query);
//     this.setState({ query: '' });
//   };

//   render() {
//     const { query } = this.state;
//     return (
//       <div className={s.Searchbar}>
//         <form className={s.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={s.SearchFormButton}>
//             <span className={s.SearchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             className={s.SearchFormInput}
//             type="text"
//             name="query"
//             value={query}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//           />
//         </form>
//       </div>
//     );
//   }
// }

export default AppBar;
