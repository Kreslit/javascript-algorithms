# Insert first data
- We set head = dataInsert and the next is head previous
# Insert last data
- We set a current variable, 2 case:
  * head = null => insert first data
  * use while loop => run when current = null, we can set this last data and break while loop
# Insert at
- Condition linked-list size >= index else return;
- If index = 0 => insert first data;
- Create temp variable and target it => use while loop and set previous is current, current is next current => we can see the next previous is node and the next node is current
# Get at
- Condition linked-list size >= index else return;
- Create count variable and use while loop => when count = index, we have value what we get by index
# Remove at
- Condition linked-list size >= index else return;
- Create current variable is head, previous is undifined and count variable is 0
- If index = 0 => we set head = the next current
- Use while loop, when count = index => break and set the next previous is the next current and subtraction size
# Clear list
- Set head is init value: null and size: 0
# Print list
- I dont think it related to linked-list
- But it help we can be determine what we have
- Create current variable is head
- Use while loop with condition current => console.log current.data and set current is the next current

My English is not good, but I am improving it every day
