import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Modal from './components/Modal';
import { Container } from './App.styled';
import Button from 'components/Button';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    searchQuery: '',
    ansferImages: [],
    loading: false,
    status: 'idle',
    page: 1,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=24625422-32b02834f3df76db1a58654ff&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(({ hits }) => {
          if (hits.length === 0) {
            // return Promise.reject(
            //   new Error(
            //     `Немає картинок з таким іменем ${this.state.searchQuery}`
            //   )
            // );
            this.setState({ status: 'reject' });
            return;
          }

          return this.setState(prev => ({
            ansferImages: [...prev.ansferImages, ...hits],
            status: 'resolved',
            loading: false,
          }));
        });
      // .catch(error => this.setState({ error }))
      // .finally(() => this.setState({ loading: false }));
    }
  }

  handelFormSubmit = searchQuery => {
    this.setState({
      searchQuery,
      status: 'pending',
      ansferImages: [],
      page: 1,
    });
  };

  addImage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  clickImage = e => {
    const srcImg = e.target.getAttribute('data-url');
    const altImg = e.target.getAttribute('alt');

    this.setState({
      modalImage: { srcImg, altImg },
      showModal: true,
    });
  };

  render() {
    const {
      status,
      ansferImages,
      searchQuery,
      loading,
      showModal,
      modalImage,
    } = this.state;
    const btn = !(ansferImages.length < 12);
    return (
      <Container>
        <Searchbar onSubmit={this.handelFormSubmit} />
        {status === 'pending' && <Loader />}

        {status === 'resolved' && (
          <>
            <ImageGallery items={ansferImages} clickImage={this.clickImage} />

            {btn && (
              <Button nextClick={this.addImage} loading={loading}>
                <Loader />
              </Button>
            )}
          </>
        )}

        {status === 'reject' && (
          <h1>There are no pictures with this name: {searchQuery}</h1>
        )}
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            src={modalImage.srcImg}
            alt={modalImage.altImg}
          ></Modal>
        )}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    );
  }
}
