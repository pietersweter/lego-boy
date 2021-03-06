import React, { Component } from 'react';
import {  View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import ProjectList from '../components/ProjectList';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#e0e2e3',
    height: height-90
  }
});

export default class ProjectsView extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <ProjectList
          dataURL='https://rocky-inlet-84429.herokuapp.com/api/projects'
          selectProject={this.props.selectProject}
        />
      </View>
    );
  }
}
