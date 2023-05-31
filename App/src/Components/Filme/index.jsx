import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';

import * as S from './style';

export default class Filme extends Component {
  render() {
    return (
      <S.Container>
        <TouchableHighlight onPress={() => alert(this.props.data.nome)}>
          <S.ImageFilm source={{uri: this.props.data.foto}} />
        </TouchableHighlight>
        <S.TextTitle>{this.props.data.nome}</S.TextTitle>
      </S.Container>
    );
  }
}
