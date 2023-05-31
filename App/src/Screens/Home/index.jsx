import React, {Component} from 'react';

import api from '../../Services/Api';
import Filme from '../../Components/Filme';

import * as S from './style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/filmes');
    this.setState({
      filmes: response.data,
    });
  }

  render() {
    return (
      <S.Container>
        <S.List
          numColumns={2}
          data={this.state.filmes}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Filme data={item} />}
        />
      </S.Container>
    );
  }
}

export default Home;
