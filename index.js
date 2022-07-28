function diem(){
    let toan = +document.getElementById("toan").value;
    let van = +document.getElementById("van").value;
    let anh = +document.getElementById("anh").value;
    let kv = +document.getElementById("kv").value;
    let kv1 = +document.getElementById("kv1").value;
    let kv2 = +document.getElementById("kv2").value;
    let kv2nt = +document.getElementById("kv2nt").value;
    let kv3 = +document.getElementById("kv3").value;
    let tongdiem="";
    switch (kv){
        case kv1:
            tongdiem = toan + van + anh + kv1;
            break;
        case kv2:
            tongdiem = toan + van + anh + kv;
            break;
        case kv2nt:
            tongdiem = toan + van + anh  + kv2nt;
            break;
        case kv3:
            tongdiem = toan + van + anh ;
            break;
    }
    document.getElementById("tongdiem").innerHTML= " Tổng điểm của bạn là " + tongdiem;
}