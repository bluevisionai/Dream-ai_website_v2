import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { List, ListItemButton, Avatar,Stack, Divider, Typography, } from '@mui/joy';

const includedFeatures = [
	'Total usage: 4',
	'1 per/week',
	'Total used: 0',
	'0',
  ]

  function valuetext(value) {
	return `${value}`;
  }

  
export default function Landing() {
	const [value, setValue] = React.useState([20, 37]);
  
	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};
	return (
		<>
		
			<div className="mx-auto max-w-7xl px-6 ">
				<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-2 lg:mx-0 lg:flex lg:max-w-none">
					<div className="p-8 sm:p-5 lg:flex-auto">
						<div className=" flex items-center gap-x-4">
						<h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What have you been up to...</h4>
						<div className="h-px flex-auto bg-gray-100" />
						</div>
						<List
							component="nav"
							sx={{
								maxWidth: 320,
							}}
						>
							{includedFeatures.map((feature) => (
								<ListItemButton key={feature} className="flex gap-x-3">
								{feature}
								</ListItemButton>
							))}
						</List>
						{/* <ul
						role="list"
						className="mt-2 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
						>
						{includedFeatures.map((feature) => (
							<li key={feature} className="flex gap-x-3">
							{feature}
							</li>
						))}
						</ul> */}
					</div>
					<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
						<div className="rounded-2xl bg-gray-50 py-1 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
							<div className="mx-auto max-w-xs px-8">
								<p className="text-base font-semibold text-gray-600">Currunt Subscription</p>
								<p className="mt-2 flex items-baseline justify-center gap-x-2">
								<span className="text-5xl font-bold tracking-tight text-gray-900">Free</span>
								</p>
								<button
									href="#"
									className="mt-2 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
									UPGRADE HERE
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-16">
				<div className="mx-auto max-w-7xl px-6 ">
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-2 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-5 lg:flex-auto">
							<div className=" flex items-center gap-x-4">
								<h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Now let's Hear about your dream...</h4>
								<div className="h-px flex-auto bg-gray-100" />
							</div>
							
							<div className="sm:col-span-2">
								<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
									Write your Dream Here
								</label>
								<div className="mt-2.5">
									<textarea
										name="message"
										id="message"
										rows={4}
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										defaultValue={''}
									/>
								</div>
								<div className="mt-2.5">
									<h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Lottery Minimum and Maximum numbers</h4>
									<Box >
										<Slider
											aria-label="Always visible"
											valueLabelDisplay="on"
											getAriaLabel={() => 'Lottarey range'}
											value={value}
											onChange={handleChange}
											getAriaValueText={valuetext}
										/>
									</Box>
								</div>
							</div>
							<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
							<button
								href="#"
								className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								Get started
							</button>
							
							</div>
							
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="rounded-2xl bg-gray-50 py-1 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
							<Stack
                            sx={{
                            display: 'flex',
                            px: { xs: 2, md: 2 },
                            py: { xs: 2, md: 2 },
                            }}
                        >
                                <Box sx={{ mb: 1 }}>
                                    <Typography level="title-sm">Your Dream Translation</Typography>
                                </Box>
                                <Divider />
                                <Stack
                                    direction="row"
                                    spacing={3}
                                    sx={{ display: { xs: 'flex', md: 'flex' }, my: 1 }}
                                >
                                    <Stack spacing={2} >
                                        <div>
                                    		<Typography level="body-xs">Your Dream Translation</Typography>
                                    		<Typography level="body-xs">Your Dream Translation</Typography>
                                    		<Typography level="body-xs">Your Dream Translation</Typography>
                                    		<Typography level="body-xs">Your Dream Translation</Typography>
                                    		<Typography level="body-xs">Your Dream Translation</Typography>
                                    		<Typography level="body-xs">Your Dream Translation</Typography>
                                    		<Typography level="body-xs">Your Dream Translation</Typography>
                                    		<Typography level="body-xs">Your Dream Translation</Typography>
                                    		<Typography level="body-xs">Your Dream Translation</Typography>
                                    		<Typography level="body-xs">Your Dream Translation</Typography>
                                        </div>
                                    </Stack>
                                </Stack>
                                <Divider />
								<Box sx={{ mb: 1 }}>
                                    <Typography level="title-sm">Your Lucky Numbers</Typography>
                                </Box>
                                <Divider />
								<Box sx={{ display: 'flex', gap: 1, pt: 2 }}>
									
									<Avatar alt="lottery" color="danger" size="sm">6</Avatar>
									<Avatar alt="lottery" color="danger" size="sm">7</Avatar>
									<Avatar alt="lottery" color="danger" size="sm">20</Avatar>
									<Avatar alt="lottery" color="danger" size="sm">35</Avatar>
									<Avatar alt="lottery" color="danger" size="sm">18</Avatar>
									<Avatar alt="lottery" color="danger" size="sm">9</Avatar>
									<Avatar alt="lottery" color="warning" size="sm">8</Avatar>
								</Box>
                                   
                        </Stack>
								{/* <div className="mx-auto max-w-xs px-8">
									<p className="text-base font-semibold text-gray-600">Your Dream Translation</p>
									<p className="mt-2 flex items-baseline justify-center gap-x-2">
										<h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">ai response over </h4>
									</p>
								</div>
								<div className="mx-auto max-w-xs px-8">
									<p className="text-base font-semibold text-gray-600">Your Lucky Numbers</p>
									<Box sx={{ display: 'flex', gap: 1 }}>
										<Avatar alt="lottery" color="danger" size="sm">6</Avatar>
										<Avatar alt="lottery" color="danger" size="sm">7</Avatar>
										<Avatar alt="lottery" color="danger" size="sm">20</Avatar>
										<Avatar alt="lottery" color="danger" size="sm">35</Avatar>
										<Avatar alt="lottery" color="danger" size="sm">18</Avatar>
										<Avatar alt="lottery" color="danger" size="sm">9</Avatar>
										<Avatar alt="lottery" color="warning" size="sm">8</Avatar>
									</Box>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

