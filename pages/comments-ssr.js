export default function Comments(props) {
  return(
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {
          props.comments?.map(comment => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await res.json();

  return{
    props: {comments}
  }
}