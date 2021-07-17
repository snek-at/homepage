/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {ConnectedPageType, SimpleTextField as TextField} from '@snek-at/jaen'

import {ReactComponent as SnekSvg} from '~/common/snek-logo.svg'

import Boop from '~/components/Boop'

import TextPage from '../Text'
import './home.scss'

const HomePage: ConnectedPageType = () => {
  return (
    <div className="content">
      <div className="logo">
        <Boop rotation={20} timing={200}>
          <SnekSvg className="App-logo" fill="white" />
        </Boop>
      </div>

      <div className="text">
        <TextField name="coming-soon-text" />
      </div>

      <div className="footer-text">
        <TextField name="footer-text" />
        <a href="/legal-notice">legal notice</a>
      </div>
    </div>
  )
}

HomePage.PageType = 'HomePage'
HomePage.ChildPages = [TextPage]

export default HomePage
