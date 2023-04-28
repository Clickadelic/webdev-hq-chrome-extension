import React from 'react';
import FormSearchBar from './FormSearchBar';
import GoogleApps from './GoogleApps';
import Logo from '../../Logo';

function MultiBox() {
	return (
		<>
			<div className="flex justify-center mb-12">
				<Logo />
			</div>
			<div className="w-96 md:w-[600px] m-auto rounded-md bg-white/10 backdrop backdrop-blur p-2">
				<div className="bg-white p-2 rounded-md">
					<FormSearchBar />
					<GoogleApps />
				</div>
			</div>
		</>
	)
}

export default MultiBox