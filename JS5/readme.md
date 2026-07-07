JavaScript Execution Context
1.Global Execution Context    <-  this
value of this->window

2.Function Execution Context

3.Eval Execution Context

{}->Memory Creation Phase
{}->Execution Phase
    Execution Phase Example:
        let val1=10;
        let val2=5;
        function addNum(num1,num2){
            let total=num1+num2;
            return total;
        }
        let result1=addNum(val1,val2);
        let result2=addNum(10,2);

            Steps:
            1.Global Execution ->(alloctes in) this
            
            2.Memory Phase:
                val1->undefind
                val2->undefind
                addNum->function defination
                result1->undefind
                result2->undefind
            
            3.Execution Phase:
                val1<-10                                                when execution is complete this execution block delete
                val2<-5                                                 ↗
                addNum->create seprate Execution block [newVariable env+ execution thread]
                                                            ↓                   ↓
                                                       Memory Phase:           Execution Phase:
                                                            val1->undefind          num1->10
                                                            val2->undefind          num2->5
                                                            total->undefind         total->15      
                                                                                        ╰┈➤return in Global Execution Context


Call Stack:::::

        |                                   |
        |                                   |
        |                                   |
        |                                   |
        |                                   |
        |                                   |
        |                                   |                   
        |                                   |                               
        |                                   |
        |          three()                  | 
        |   ____________________            |
        |         two()                     |
        |  _________________________        |
        |          one()                    |
        |    ______________________         |
        |       Global Execution            |
        |___________________________________|