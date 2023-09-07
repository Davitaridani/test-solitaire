"use client"
import React, { useState } from 'react'

const RegisterPage = () => {

	const urlApi = "https://reqres.in/api/register"

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	})
	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({
			...formData, [name]: value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await fetch(urlApi, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				const data = await response.json();
				console.log('Data berhasil dikirim!');
			} else {
				console.log("Gagal mendaftar.");
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>

			<section className='pt-10'>
				<div className="container ">
					<h3 className='text-2xl mb-5 font-bold'>Register</h3>

					<form onSubmit={handleSubmit} >
						<div className='mb-3'>

							<input
								className="border rounded-md w-1/2 flex justify-center py-2 px-3 focus:outline-none focus:border-blue-500"
								type="text"
								id="username"
								name="username"
								placeholder='Username'
								value={formData.username}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='mb-3'>

							<input
								className="border rounded-md  w-1/2 flex justify-center py-2 px-3 focus:outline-none focus:border-blue-500"
								placeholder='Email'
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='mb-3'>
							<input
								className="border rounded-md  w-1/2 flex justify-center py-2 px-3 focus:outline-none focus:border-blue-500"
								type="password"
								placeholder='Password'
								id="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								required
							/>
						</div>

						<button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Kirim</button>
					</form>
				</div>
			</section>

		</>
	)
}

export default RegisterPage
