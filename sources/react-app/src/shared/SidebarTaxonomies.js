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

import React, { Suspense } from "react";
import { FormattedMessage } from "react-intl";
import { usePencil, useTaxonomiesResource } from "./hooks";
import { createTaxonomyFilter } from "./utils";
import CircularProgressSpinner from "./CircularProgressSpinner";
import { parseDescriptor } from "@craftercms/content";

function SidebarListContent(props) {
	const {
		title,
		filter,
		baseUrl,
		listClass,
		resource
	} = props;
	const { data } = resource.read();
	const taxonomies = parseDescriptor(data.taxonomy.items);
	const filteredTaxonomies = taxonomies.filter(filter)[0];
	const ice = usePencil({ model: filteredTaxonomies });
	return (
    Array.isArray(filteredTaxonomies?.items?.item) && filteredTaxonomies.items.item.length > 0 &&
		<div className="sidebar-box">
			<h3 className="heading">
				{title}
			</h3>
			<ul className={listClass} {...ice}>
				{
					filteredTaxonomies?.items?.item.map((taxonomy) =>
						<li key={taxonomy.key}><a href={`${baseUrl}/${taxonomy.key}`}>{taxonomy.value}</a></li>
					)
				}
			</ul>
		</div>
	);
}

export function SidebarTaxonomies(props) {
	let resource = useTaxonomiesResource();
	return (
		<Suspense fallback={<CircularProgressSpinner screenHeight={false} />}>
			<SidebarListContent
				{...props}
				resource={resource}
			/>
		</Suspense>
	);
}

export function SidebarTags() {
	return (
		<SidebarTaxonomies
			title={<FormattedMessage
				id="sidebarTags.tagsSectionTitle"
				defaultMessage="Tags"
			/>}
			filter={createTaxonomyFilter("tags.xml")}
			baseUrl='/tag'
			listClass='tags'
		/>
	);
}

export function SidebarCategories() {
	return (
		<SidebarTaxonomies
			title={<FormattedMessage
				id="sidebarCategories.categoriesSectionTitle"
				defaultMessage="Categories"
			/>}
			filter={createTaxonomyFilter("categories.xml")}
			baseUrl='/category'
			listClass='categories'
		/>
	);
}
