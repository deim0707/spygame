import {Wrapper, ButtonStart} from "./createGameSetting.style";
import { useForm } from "react-hook-form";
import Header from "../../Header/Header";
import CreateGameItem from "../CreateGameItem/CreateGameItem";


const CreateGameSetting = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <Wrapper>
            <Header isHaveStepBack={true}>Создать игру</Header>
            <CreateGameItem isHaveCheckBox={true} value={false} title="Онлай-раздача" description="вы получите код игры, по которому остальные игроки смогут подключиться"/>
            <ButtonStart>Начать</ButtonStart>
        </Wrapper>
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     {/* register your input into the hook by invoking the "register" function */}
        //     <input name="example" defaultValue="test" ref={register} />
        //
        //     {/* include validation with required or other standard HTML validation rules */}
        //     <input name="exampleRequired" ref={register({ required: true })} />
        //     {/* errors will return when field validation fails  */}
        //     {errors.exampleRequired && <span>This field is required</span>}
        //
        //     <input type="submit" />
        // </form>
    )
}

export default CreateGameSetting;
