/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import Bio from '../components/Bio';
import { Field, RenderField } from '@craftercms/studio-guest';

function SidebarBios(props) {
  const { bios } = props;
  return (
    <>
      {
        bios?.map(bio =>
          <div key={bio.craftercms.id} className="sidebar-box">
            <Bio model={bio} />
          </div>
        )
      }
    </>
  );
}

export function SidebarBiosWithICE(props) {
  const { model, fieldId } = props;
  return (
    <RenderField
      model={model}
      fieldId={fieldId}
      className="bio-zone"
      format={(bios) => bios?.map((bio, index) =>
        <Field
          key={`${bio.craftercms.id}_${index}`}
          model={model}
          fieldId={fieldId}
          index={index}
          className="sidebar-box"
        >
          <Bio model={bio} />
        </Field>
      )}
    />
  );
}

export default SidebarBios;