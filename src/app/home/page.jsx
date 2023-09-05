import React from 'react'

const HomePage = () => {
	return (
		<>

			<div className="container">
				<table class="">
					<thead>
						<tr className='border-collapse border border-slate-500'>
							<th>Id</th>
							<th>Profile</th>
							<th>Firsname</th>
							<th>lastname</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>The Sliding </td>
							<td>Malcolm</td>
							<td>1961</td>
						</tr>
						<tr>
							<td>Witchy Woman</td>
							<td>The Eagles</td>
							<td>1972</td>
						</tr>
						<tr>
							<td>Shining Star</td>
							<td>Earth, Wind, and Fire</td>
							<td>1975</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default HomePage
