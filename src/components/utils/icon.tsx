
import React, {useEffect, useState} from 'react';
import {IconName, IconPrefix, library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

// Icons (cast: the tree contains duplicate @fortawesome/common-types copies,
// whose structurally-identical IconPack types TS treats as distinct)
library.add(fas as any, far as any, fab as any);

interface IconProps {
	icon: [IconPrefix, IconName];
}

const Icon: React.FC<IconProps> = ({ icon }) => {
	const [iconType, iconKey] = icon;
	const [stateIconKey, setIconKey] = useState<IconName>('circle-notch');

	useEffect(() => {
		setIconKey(iconKey as IconName);
	}, [iconKey]);

	return <FontAwesomeIcon icon={[iconType as IconPrefix, stateIconKey]} />;
};

export default Icon;
