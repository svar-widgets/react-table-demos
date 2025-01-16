export default function AvatarCell(props) {
	return  (
		<div className="wxd-container">
			<div className="wxd-avatar">
				<div className="wxd-user-avatar">
					{props.row.avatar &&
						<img className="wxd-user-photo" alt="" src={props.row.avatar} />}
				</div>
			</div>
			<div className="wxd-info">
				<div className="wxd-name">{props.row.lastName}</div>
				<div className="wxd-mail">{props.row.email || ""}</div>
			</div>
		</div>
	)
}