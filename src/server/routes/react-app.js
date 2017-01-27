import Application from '../../components/application';
import React from 'react';
import {renderToString} from 'react-dom/server';

export default function reactApp (req, res) {
  return res.render('react-app', {
    content: renderToString(<Application />)
  });
}
