// {
//   movieDetails.length > 0 && (
//     <div>
//       {movieDetails.map(
//         ({
//           backdrop_path,
//           original_title,
//           release_date,
//           vote_average,
//           overview,
//           genres,
//         }) => (
//           <div>
//             <img src={imgUrl + backdrop_path} alt={original_title} />
//             <h2>
//               {original_title} ({release_date})
//             </h2>
//             <p>Vote average: {vote_average}</p>
//             <h3>Overview</h3>
//             <p>{overview}</p>
//             <h3>Genres</h3>
//             <ul>
//               {genres.map(({ id, name }) => (
//                 <li key={id}>{name}</li>
//               ))}
//             </ul>
//             <p>Additional information</p>
//             <div>
//               <Link to={`${this.props.match.url}/cast>${this.props.match.url}`}>
//                 Cast
//               </Link>
//               <Link to={`${this.props.match.url}/reviews`}>Review</Link>
//             </div>
//             <Route
//               path={`${this.props.match.path}/cast>${this.props.match.path}`}
//               component={Cast}
//             >
//               {/* <Cast movieId={movieId} />
//           Cast */}
//             </Route>
//           </div>
//         ),
//       )}
//     </div>
//   );
// }
