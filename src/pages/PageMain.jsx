import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import styled from "styled-components";
//
// import {CoolStyles} from 'common/ui/CoolImports';

import AppPageMain from 'common/app/AppPageMain';

export class PageMain extends Component {

   static propTypes = {
      app_name: PropTypes.string.isRequired,
   }

   state = {
      left_width: 0,
      right_width: 0,
   };

   componentDidMount() {
   }

   on_resize = (left_width, right_width) => {
      this.setState({
         left_width: left_width,
         right_width: right_width
      })
   }

   render_content_left = (width_px) => {
      return [
         "content_left"
      ]
   }

   render_content_right = (width_px) => {
      return [
         "content_right"
      ]
   }

   render() {
      const {left_width, right_width} = this.state;
      const {app_name} = this.props;
      const content_left = this.render_content_left(left_width);
      const content_right = this.render_content_right(right_width);
      return <AppPageMain
         app_name={app_name}
         on_resize={(left_width, right_width) => this.on_resize(left_width, right_width)}
         content_left={content_left}
         content_right={content_right}
      />
   }
}

export default PageMain;
