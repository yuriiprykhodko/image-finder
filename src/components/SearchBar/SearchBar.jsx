import React, { Component } from 'react';
import 'styles.css';
import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field } from 'formik';

export class SearchBar extends Component {
//     state = {
//       query: '',
//   }
  
//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }
  handleSubmit = (values,actions) => {
  
          if (this.state.query.trim() === '') {
          toast.error('Введите имя.',{theme: "dark",});
          return;
}
    this.props.onSubmit(values)
    actions.resetForm();
  }
  
    render() {
        return (
          <header className="Searchbar">
            <Formik initialValues={{query: ''}} onSubmit={this.handleSubmit}>
    <Form className="SearchForm">
              <button type="submit" className="SearchForm-button">
                <FiSearch size={20} />
      <span className="SearchForm-button-label"> </span>
    </button>

    <Field
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
                placeholder="Search images and photos"
                name='query'
    />
              </Form>
              </Formik>
</header>
        )
    }
}




