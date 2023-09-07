"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image";
import axios from 'axios'
import Loading from '@/components/Loading'
import Error from '@/components/Error'

const HomePage = () => {

	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const urlAPi = "https://reqres.in/api/users"

	const fetchDataUsers = async () => {
		try {
			const resUsers = await axios.get(urlAPi)
			setIsLoading(false)
			setUsers(resUsers.data.data)
		} catch (error) {
			setIsError(true)
			console.log(error);
		}
	}

	useEffect(() => {
		fetchDataUsers()
	}, [])

	if (isLoading || !users) return <Loading />
	if (isError) return <Error />

	return (
		<>

			<section className='pt-10'>
				<div className="container ">
					<h1 className='mb-4 font-bold text-2xl'>Table Users</h1>
					<div class="flex flex-col">
						<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
								<div class="overflow-hidden">
									<table class="min-w-full text-left text-sm font-light">
										<thead class="border-b font-medium dark:border-neutral-500">
											<tr>
												<th class="">#</th>
												<th scope="col" class="px-6 py-4">Profile</th>
												<th scope="col" class="px-6 py-4">first</th>
												<th scope="col" class="px-6 py-4">Last</th>
												<th scope="col" class="px-6 py-4">Email</th>
											</tr>
										</thead>
										<tbody>
											{users && users.map((user, i) => (
												<tr key={user.id} class="border-b dark:border-neutral-500">
													<td className='font-bold'>{i + 1}</td>
													<td class="whitespace-nowrap px-6 py-4">
														<Image src={user.avatar} width="50" height="50" alt='profile' className='rounded-lg shadow-lg' />
													</td>
													<td class="whitespace-nowrap px-6 py-4">{user.first_name}</td>
													<td class="whitespace-nowrap px-6 py-4">{user.last_name}</td>
													<td class="whitespace-nowrap px-6 py-4">{user.email}</td>
												</tr>
											))}

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomePage
