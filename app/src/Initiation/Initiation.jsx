import React, { useEffect, useState } from "react";
import {
  Attento,
  Header,
  ProfileContainer,
  Liner,
  MRow,
  WhiteButton
} from "@/_styles/basic";
import { EmptyToadContainer, ToadContainer } from "./styles";
import { authenticationService, toadService } from "@/_services";
import styled from "styled-components";
import { web3Service } from "../_services/web3.service";

const Initiation = () => {
  const [currentUser, setCurrentUser] = useState(
    authenticationService.currentUserValue
  );
  const [toads, setToads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [booped, setBooped] = useState(false);
  const [QR, setQR] = useState("");

  const createToad = () => {
    toadService.createToad("raptorhole").then(toad => {
      setQR(toad.qrPng);
      getZeToads();
    });
  };

  // should just get your init or something
  const getZeToads = () => {
    toadService.getYours().then(toads => {
      setToads(toads);
      setQR(toads[0].qrPng);
    });
  };

  useEffect(() => {
    web3Service.connect();
    getZeToads();
    setLoading(false);
  }, []);

  // should stop looping when the toad is booped
  useEffect(() => {
    if (toads.length === 0) return;
    if (booped === true) return;
    const call = () => {
      web3Service.getToad(toads[0].id).then(hi => {
        if (hi === false) {
          console.log("this is false");
        } else {
          console.log("this is true");
          setBooped(true);
        }
      });
    };
    const intervalId = setInterval(call, 1000);
    return () => clearInterval(intervalId);
  }, [toads]);
  if (loading) return <div>loading...</div>;
  return (
    <ProfileContainer>
      <Header>hi {currentUser.raptorname}!</Header>
      {!QR && (
        <EmptyToadContainer>
          <Liner>
            you have currently collected <Attento>{toads.length}</Attento>{" "}
            toads!
          </Liner>
          <Liner>
            you know where some toads will be? Valencia Room on Nov 2nd!
          </Liner>
          <Liner>Click below to grab your ticket!</Liner>
          <MRow>
            <WhiteButton onClick={createToad}>CLICK ME!</WhiteButton>
          </MRow>
        </EmptyToadContainer>
      )}
      {QR && (
        <ToadContainer>
          {!booped && <img src={QR} />}
          {booped && (
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFRUVFxUXFxYXFRUVFxcQFRUYFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mHyUtLS0tLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADcQAAEDAwIDBgQFBAIDAAAAAAEAAhEDBCESMQVBURMiYXGBkQahsfAyQlLR4RQjwfFiogcVNP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAArEQACAgICAgAEBQUAAAAAAAAAAQIRAyESMQRBEyJRYQUUMnGhI4Gx0fD/2gAMAwEAAhEDEQA/AAOfK616U1GUWkCV8wo0eQ0O0qiOSktUIdS9C0TsGw1d6Xa5CdXlQPWU4skNUqQh1KyVr1pSlWsjFFomhm5qrttWErIr3CE24IIK1eNyRahaPeW5EBXcAsawvZamDdKoSpUYuJp1KEhI1KcJ22ryEC5CJugsWV6WFUMPJMU7VxTjFyZai5dENVWo0S4pmhw0rXtLCF2Q8Zy7OvD4re5C9nYBatG3ARaVKEaF3Y8MYnoRgo9FGiFcPVSqrWiwoqK4el13UmGxrUuFyW7VVdWQKmMOch60HtVV7kBQ22pKiRa8owqosGhtr10vSZqIdSuUCoe7VdFdZQrEouop2I0u3VTcJAOK45FgNm4U7cJILhBRsR4ZtKUcABDc+Epc3S+X2zyXsrxG5AGFii4Mq9Z5cUDRBWsVRSSNO1cjPekqD0Wo+U0KiFySuXpl5WZcuyqggjEC5yHqXVajRLjDRJW6RtRqcMqmE5UeV9F+A/hhotmmtTGt24I2HIFemZ8MW0R2TY8lT8OT3ZX5Vy2fOfh/hdWq2QML1Vp8MEwX48F6y0sGUhDGwExpW8fGhHs1x+HBbkeaHw6wNgDnKXfwfTyXrezVTTVxjT6OvhBLR5elZeCOLaFvC3HRT+nC6OaQbPPlkKkrffZg8lQ8OanzQWYRVStS44Ydwka9uW7qrTHYq58IDqqK9qE5irQzoMq2lDD4VxUQBbSoqOqIZqJpCYSVbUldauHJNCQyEN7VGuVggRRrAiSuQuFAE1KtR664IFRAgtNyOEgx6YbWRYHgrkEpCqwrfuaQAWNUeJXznGlZ40ZA22mElXpwt6myQl7mzQmuylLZm0W4V4R2WxVazIQl7GxaqcLNuCm7iokxSc9wa0ST4wtYI0ggFMTykL65/wCOeC0SwVdEnkXDIPP/AGsX4R+Cqb4dVqAH9LQ4/wDY4X1Dhtmyk0NYDAXoYsfF8mdWLG27Y/SAGAihyEGq66bdbOgurAIYcrhyxc0XRCVSVKhQy5YfFLUQgK6CghyuHKfjbE4lyuhUlQFHxBUWcg1aYO6JKo4prK+0VS6MbiNhA1NWQ48l6s+KyeJ8N/M1dmLKp9ktcTDqITqsLtwYQmslbex+jhqEojCu06aJoVOyaQB703RGEN1ujUhiEtgdIVgqwraSmSXaVx65pUASEcely2U32ar2RQAr2S4WJl1EqvYFFAeH4hc4wvOGvLlpvfIWTVpEOlfPo8mEUjd4bWWgSCvPWbyFoUrhYS0yXE0NACRvmiCuVLonZaXDuHmpkrpxwlNaHGEpPR5dvD3vPdBher4H8LxBcD7LfseEtbyWzb04Xp4fGUds9HHgpWx3hVqGNAAhajISFN0DCPQd1/layl81I3S0aDVHFDY9ce5RkloIrZYOXdaFK4XLhyyaRqkWe5Dc9cc5Bc9cjk/RqgzaqIHpGUQVFgsrvZUo/QbL10PSLqyqa3jharJyWjFqh3tV0vWFdcSaAZdt9UKhxQO2I9CtvjKCSZNXs9AHKPWfSuJTJqYW+LLYzzfH6MOwkrbC2ONNlYZdC9VSumQloaDspppCy31EWlVJCvkFD7nhVYh0wrEpDouSrh6ACrAZSFQXUowoblyUxDBcoKqGHqlRIKGu0whyhMfhQvTRJ8wpPwg1MoL6kLtAOecBeDCN9HmJEDoR7clxgBadj8OueQSvVcO+Gg0CQumPhue2bxwOXZhcL4UTuF66xsw0JqhYAJ2lRheljwxxqkdcIqK0Lspq9QwE2WBArgeyrJqNmlnA7km7c+KxH3YnktG1r4C87FNSk2VNUjV1Kjj1/wAobKqo6oqykxDB5+5XXOQW1F15wuWa0aWWLkNC7RdLpC5+Foq6LuKrqQta6HBcmSDbNVLQtfWrn4mB97pW+t6+nSx0LTbVEx7IgdyKMePjbTJnNtJUfOPjYVbe2L6Y1EATqGrEZx5zP8ryHwz8XsLwC3sH7S2ezdJmHM2HPLYO26+28QtGVGlrm6gRELxT/gW0DtQo5OeWDv3T/K6YZsag4ZFv0yI72aXBuNl+8Y6L0LL0QvKf+kNM9x0DqQPw9N9/KFepc9kNVR3dmHGDAbzJ6Bc6lOEtdHVjwxmb17V1BZzqS02ua9ocwzAHj3eRQKkL6XxckcmJNO/9nFli4TaYg+iSMJi1owPFXe8AJNlczuugzsf0obnoXalCbVyigsZdVhCbXMoNUrtAjmp9hYf+oyrsqKjIKo2rmE2IbCsl21IC6XSkAy0BFDQlGOR2HCaYj5nY8EfUOdl6vhvAwwDC9BbWbW7BFcwLnx4IwJhiURa1aG8lotrJZtMIwAC6E6NeIXtFO1Q9SmlK2OkHD0rdMxkq+uEOrVlTLa2FGHXfBn5mNlVnEehSnFu849AmOFcID4c8wN94keK8iUZcmomya42zZ4TcufMbDGJ9VsModShWpptENGPZONqBbRx327MZS+hUUQFHBdc9VJRKK9CTAPahueiVAgOWMoP0aWDNT78EOjXzBGCJB9R+67XP+fYIbXQ3OP2wsfhtsq9HLy7DXNBnvYx1Eb9N90ZtzI3P35JevTB3856Dqs65uDTAJ22Pgdj6fwrjga36JbTNf+tECdj8iluIVKb2wXEZ3BiCCsV99qOk+ERvP39EUWRI233nKF4zk6S0OMuLuxLiYqYFv3jOQYILY6lZjuI1mnTXt8H9LTB9BM7dV6alRBdEpypbDkto/hcX3o64+fKPqzF4HxihGmiWUz+k90k5xzB54lbVZ07R5Dl4JKvw+k4y9jXHqWgn33TNEMYyGiB5k+G5XZh8fJikqa4+zHPnx5Y9OyzaJIkoLrYDKaNXGEKrUEQV2dHGZde8zCZt2g5Q7ii0lGADQjkIHOp0LlSlGOq7bOGpxXHVQ4z0SGEfTLBuh0TIlUuKhc05RaNKGtQAeq3ACKw96PBDqga2iVa3pS9xToQZtPdE0QhsOkHzXalcJkh21CUUK1RkbITqkBZmpbVCgqSgNd1RmuCCgzSFx1SEsasbIZcSixBalVBNRUcCo2lKRRmcRozKDbXWnSz/AKjJJ8VpXrRC8xeFwMgrg8rH7RcOz2NvxBrfP7wFoU7qf2XzywvQDLjlemsrxmDqJ8pPss8U29MnJBI9Ix/iuues1t19/ujNqLaW+jJDL3IYQjU8UPtuSaiDYR4H30Stc49/Yn9lK1X7+iUrXECJyT7BHFAmwnbRPTH7ErPuamoOadj9Rz+i5Xrxufv7lVo94/fWUfYoPwewzqO4WrduAKHavASXEa25BXVhVRI7YJp/uEhM9oeayuHhz5cE02g+Voi2w1V6G44k7Ku0orCXMkhUSWdcAAQk6j9UmVO0BMDku9lKTEDok801RzuqtYBOUN9eBpG6aVCBUmOL3dEw22JdpHqg0KxZMpxjy1pdzKBgK1A6tI2Q69RweGdE5YU3fid5rPqVA+qSDKQDjG/3N+S5ZPcQ8zzPyVbYf3XH/ilrOqe/BjcoEP2zyWSTzH1RrkDVukbWnNMmeYPzUunEOyhPQUb9at0S2uUxUE7IQpxlZ2b0QNXH42VKhXQCUAWpmVZz4VHO0ygOeeaYUFdUlL1riBhBqzG6HSaCUxMHUuCcINak0iOabvy1gxuUmGjcnKTimCMi6sNJBAxzTguxTAB+RjHnyCT+J7/s6cNMu5rzvw7xQPqnt3QIx0BXA+HJqLOlYZyjbPdW97qIEgE8hswf5P7rUo3IOJwPvPUry9Noz2dRkb78/wB0KncviA7A5eO0lWov1swnBrvR6+rdxz2En12+qAL4bTsc/IQvM/1DzLQ7eBldewzJfM9Ou60UJekZ0jbub8CZIxq+n+ZSFxxNolxcMR796foVk31IFp7xnrK8LxHtG1iwuJzO/X/ZROEo7ZcIpn0CpxIOcIMgfNa1hX5ryVlSDQ0k5gLds607JY8Mm7Y5uK0jauLs4A2VLgAtiYlJGsZgZQr67LHU2xJJ28F21SMUa1ow0qYaM+KabW2lJCuXeSMwg4TBhLp7QwkLkwyEK7cIawCZcPYLlZ2oxkJMBUNGTKPaPmTyVDRIMDfn4K9NmIBwTE9eqlCotU0gOMk9EK3YJnp1V7sjU1o8yla2QSeWYHMBXYhtjGucSdgMeipUug92lmcAkKdu0MyYnb12Crwii06iPxAFJsZo1XubTJ2kfJJ8Kt57zcdZ5jqi8ZqA02s5mD6KWb3U2ERIEjpEYQ+6ApwqtLqrjmJHoNkva0ZY5wjmf4RgCKDnNEGpAnw/0gmm/sjp06XQD5Hcj5pAXtJdSI1RkbpniNI6hO+kbeqXbSIZvHeA8gRsj8Ue7UNMmGt904iZvUiIyhVGE7qaoKo93NYHTQLsjPgrPdAQK9yNpyknXBJgHA5phQ266kwEGtVJwNuqCx4J8OvVStUEd0j90woHUeSIKF2xaMZKjeJ27BNV3ezjYJc/GNAS2jTkjmBPzXNPzIxbik2/smdEPEnJcrSX3aL21vVfLnYHKcJHiPEW0zpbL39eQWbxHi9d+zSJ8cewT3BqRo0zWuwwE/gYPxH/AJO6LjyZvImtriv5/wC/Y6oYvHxvvk/4MXj9NzaQe8w5+SDyWDwllN5hxg9eq58S8bNw/AkAnHJZnbOEd0DyV4cElG0iZ+RHlTZ6m5tqdMzlvkcH1R6N6Gtx6Ly1PjDgIMx03Cu7iWuMR1XfiaT/AE0zgzW1+qz0lC+iSd1e2vZJ3Xlbi+6IAv3xAMeWSSui0cx7Grft6wvPtYa9fUOX+EpStK5bNTGCRnvGMnHlK9L8B2WrU8jrHpzXneX5P9N0eh43j/Mmx1rdAaSMRGeRRKdUg4O/Tom6tJzDBaHscJIPzhLu4M1+aNYNP6amI8nLHxPxGMlxyP8Aua+T+Hyi+WPaNOyvmtwd1AC+u3YjJ8gAsccGuGZLCR+od4H1GyNw97nPktIIbzkHJ5+y9RZVJaPO4taaPSVWQdwituGNkNPe8dlnunGd/X6Lh1TMem/t4p8hNHLg1TUEOGOSPTDye8YVrekSdUkYA223Rf6fU4AkEdUtsKRam0Tg74lMspjAmAPXP2EveFjKboIBGRJjbKz2XHagO7TSAJPeA2B59Jj3VVXYg1zTBcXB2/jyG6Hb1AHGHYcIhDc8ANDnNBLZkGZM5g/e6Tt+IM7QtbTMyRMCCRtlNNIXE1Ld3cax2SDEnGORV6dwGkQY78A+QiPms9wD7nxYxvPZx1T57t90w46TLhPMAe0wkxpDT7gCs0HvRjmRHL5ot/Xd2WMF28Dl74SNpTAh0D8Wc7ED9nBEZX7SrA2bESPD9jKEJoLxJ3cotJgRkAcxifqrXFVzWhjRzdHkOfzKWaC9zycAaQO9I0gb+ePmm6rGSBrnTDd8l25+SliFn06jYzIJBjnnHtAKtxCudZ7hiBHfHTPzlGNYGpG4a0AT1cDpPyhZYunOLiXMadRwYHkRE4iEPSBHrqm3j97pCvdchvz/AIQ6904iOX1QGtManGB97KDpolSpPgOZQAOezRt4rtVw3IwNhzSd5duPLu47u0+aQy1W8JMBsD6+StcXMCJg49Al6lyAM78h0HL0SlS4aBqfvy5znbzTsAN9onbUScTvJQrOz0AzvMnzRWAFwdpzHMzHl0XKtcnEI/yTYG+4m6jDmMlw2kTnrHNYnEK9S4Op5IEbTkrXr2/M58OcpK4ZHTnhYSxRlK2axyyjFpezJfataIA/kqpoJx1OSMrr9Iaeo+f3B9wtutGLMs0AhOpRstOlSwSYxJMkDA6Zz5JYU59fsI5E8TvCuFsqGatQMbqDQJ7zjzA9Oa1LqpaWsimA54xjvH1J2WFXpgnbAQ30N42GfSMlcuXE8kvmk6+h04sixx1FX9TlxxirMtJmZl0H0GF7j/x//wDOXk8nGeUzsvBVqJ5jfOPFa3AON1qLH0wxrmuECZkSTqyPP5KPJ8fnj4wXsvBn4zub9F7m9uKriTVdp1EtaIAAJwPEbbpizqXLRAcCJJlwn03S9BpkcoGfIJ2hRJdiRnEHn4Lb8vjrjSr9jP8AMZE7TZrjjVzTbqc0aIH4XwYwOaft/iF9cF2mKZhpDgHHU38zSNunis67qtA78hrZJwJLWZO/jp803ZAU6QZpEjTsNPfI1OPoQVGPwsUJqUVsrJ5eTJHjJ6NRrmluHQTkcoz4LtKsA1u/T1AHX1SeXGdWd+p2zMLtStAEDGpokjq4bee3qu2jjs2qL9bSAYwDIPMyIXNeid3c8Dr0AXKNUBhOwGemBqdGR5pCpUO5c6Q7ugHAAneN8A+6tMTD1aZc8uOS8QBBnvbCOnmlABTNZndkOaIA2BYD0Ebjrv6I1a5e0ahOsxvs1vU/pxPolqLdb+83+29waXA7/wBtjW/QdPyoYBrh7AG03xkYBwSSJH34Ktmxg/CGjMCJ2yT8pTD6YqOOkwYaBAEENwBJ2y47ZyVRlu3ujk7Se6BEBpBnzLm+yXsLLU2jU93iQcgA6fzA77QM/p81JBfOvOoTBkASABz6kygX9TQ7Q3Oe8T0GDJjyHtsgUzrD9AIBgA5/M8E6Tg6cjPKT0TaCzQY2GveZAO3mW7TPKEG2vGhr37ujUJGJeGtz490jK7dXjyAC7LjJiIgDBE8p1bdUC4oAU40yObWkCCCSRIE6Zcd4/COqGInAHkmJG0gE7CRM+Ugei0xUaSO9qcSCR+oSSY5iMATG/gkbcmmHkiAGnPe2qAYxvDxy8EXhw0mRjSHFuTOx3PPIPuoHQShTBuKj9ToLmsg4HdLXAAc8skHpKxxbhxJAO5ECcZ/44Wrw2G03PcWta3JcZAAaN8YAAdnrJ6IJvCXOjUcn8jiJOTBDTjP1TfQh94O7s9Bn0iOSDVw0a9+QBIE749lFFkdQM1wR3mkjw6/75qVXtDYAyRjwGdp2XFE7EIPZu45PhyHUn291mNear52a090ctXMldUSGP6Q0QYJiYBnBxuOchcZSOMb536cgook3oF2DuGwJzzHI5x/CzKtEkmTHioon0ieznYafQiZ3Pl9+iCLIuMxjEbCeQx97+Ciim9BQO4oAmG4iJ8Tywg1aJDYjPLxPMfP75xRA0gD7Y56Dnk5Q3WhnQSNw4xuBmJHSRPooopTG0MmxjOoR/P3zVm2cCY8J8fBRRERNDNGiYc6MRp9SI3O3VO29BzZcRiRgbRMbDx5qKLUzD3ADtdMjMBsF2QHvl3d54AzPvlPNoajEkknJgeJx9FFFSJZHUsiZAxykxAI25mQnXCAwAHLxjA/CNeZ8Ac7qKKxIFeXOzdQGSIiZOYkc8n6K1oZ06vwhpcBzJDSRIGc9OiiiO5UHoBdXwLiZAiPzHToIPdc0eojf6IjqxazUXQS8mTmCGy3pjbHjzyVFEewRyxqaqmkmCGiTzmBLSDvny22nZzhLQWMJAiamcHuyHsPgdOc9VFE49h6FK11LpDC4vmDjDtOrSzqYB3j1kS7YAEl2gj8TTJ2LHSN9vxuMgfmHJRRK7YGXcvL3un8JJaO6DgDTzyRv6ot67tHOEgCAAAJBqPGqPaMHoFFEMQe6eW0CB3nFwEkEiIOd+s+yH2ppUHOI1ObiA2Xu70nOsDwEQooihAKN4X23eY9hmn+NpIew9895pgOyeXRbHw+f7Z0FoBcTEbYHkoopXoGf/9k=" />
          )}
        </ToadContainer>
      )}
    </ProfileContainer>
  );
};

export { Initiation };
