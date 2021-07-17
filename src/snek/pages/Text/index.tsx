/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {
  ConnectedPageType,
  SimpleRichTextField as RichTextField
} from '@snek-at/jaen'

const TextPage: ConnectedPageType = () => {
  return (
    <>
      <RichTextField name="content" />
    </>
  )
}

TextPage.PageType = 'TextPage'
TextPage.ChildPages = []

export default TextPage
