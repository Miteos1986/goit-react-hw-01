import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css"

const FriendList = ({friends}) => {
return (
    <div className={styles.containerFriend}>
<ul className={styles.listFriend} > 
{friends.map((friend)=>{
    return (<li className={styles.listItem} key={friend.id} >
    <FriendListItem {...friend} />
</li>)
})}
	
</ul>
</div>
)
}

export default FriendList