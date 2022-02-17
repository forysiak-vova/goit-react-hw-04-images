// import { render } from '@testing-library/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleImgChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.warn('🦄 Please, enter text !', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    onSubmit(searchQuery);

    // this.setState({ searchQuery: '' });
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handelSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
            {<AiOutlineSearch size={24} />}
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleImgChange}
        />
      </SearchForm>
    </SearchbarContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

// class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };
//   state = {
//     searchQuery: '',
//   };

//   handleImgChange = e => {
//     this.setState({ searchQuery: e.currentTarget.value });
//   };

//   handelSubmit = e => {
//     e.preventDefault();
//     if (this.state.searchQuery.trim() === '') {
//       toast.warn('🦄 Please, enter text !', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       return;
//     }

//     this.props.onSubmit(this.state.searchQuery);

//     this.setState({ searchQuery: '' });
//   };

//   render() {
//     return (
//       <SearchbarContainer>
//         <SearchForm onSubmit={this.handelSubmit}>
//           <SearchFormButton type="submit">
//             <SearchFormButtonLabel>
//               {<AiOutlineSearch size={24} />}
//             </SearchFormButtonLabel>
//           </SearchFormButton>

//           <SearchFormInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchQuery}
//             onChange={this.handleImgChange}
//           />
//         </SearchForm>
//       </SearchbarContainer>
//     );
//   }
// }
