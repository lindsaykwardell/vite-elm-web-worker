function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}
function F2(fun) {
  return F(2, fun, function(a) {
    return function(b) {
      return fun(a, b);
    };
  });
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) {
      return function(c) {
        return fun(a, b, c);
      };
    };
  });
}
function F4(fun) {
  return F(4, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return fun(a, b, c, d);
        };
      };
    };
  });
}
function F5(fun) {
  return F(5, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return fun(a, b, c, d, e);
          };
        };
      };
    };
  });
}
function F6(fun) {
  return F(6, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return fun(a, b, c, d, e, f);
            };
          };
        };
      };
    };
  });
}
function F7(fun) {
  return F(7, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function(g) {
                return fun(a, b, c, d, e, f, g);
              };
            };
          };
        };
      };
    };
  });
}
function F8(fun) {
  return F(8, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function(g) {
                return function(h) {
                  return fun(a, b, c, d, e, f, g, h);
                };
              };
            };
          };
        };
      };
    };
  });
}
function F9(fun) {
  return F(9, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function(g) {
                return function(h) {
                  return function(i) {
                    return fun(a, b, c, d, e, f, g, h, i);
                  };
                };
              };
            };
          };
        };
      };
    };
  });
}
function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
var _List_Nil = { $: 0 };
function _List_Cons(hd, tl) {
  return { $: 1, a: hd, b: tl };
}
var _List_cons = F2(_List_Cons);
function _List_fromArray(arr) {
  var out = _List_Nil;
  for (var i = arr.length; i--; ) {
    out = _List_Cons(arr[i], out);
  }
  return out;
}
function _List_toArray(xs) {
  for (var out = []; xs.b; xs = xs.b) {
    out.push(xs.a);
  }
  return out;
}
var _List_map2 = F3(function(f, xs, ys) {
  for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
    arr.push(A2(f, xs.a, ys.a));
  }
  return _List_fromArray(arr);
});
F4(function(f, xs, ys, zs) {
  for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
    arr.push(A3(f, xs.a, ys.a, zs.a));
  }
  return _List_fromArray(arr);
});
F5(function(f, ws, xs, ys, zs) {
  for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
    arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
  }
  return _List_fromArray(arr);
});
F6(function(f, vs, ws, xs, ys, zs) {
  for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
    arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
  }
  return _List_fromArray(arr);
});
F2(function(f, xs) {
  return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
    return _Utils_cmp(f(a), f(b));
  }));
});
F2(function(f, xs) {
  return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
    var ord = A2(f, a, b);
    return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
  }));
});
var _JsArray_empty = [];
function _JsArray_length(array) {
  return array.length;
}
var _JsArray_initialize = F3(function(size, offset, func) {
  var result = new Array(size);
  for (var i = 0; i < size; i++) {
    result[i] = func(offset + i);
  }
  return result;
});
var _JsArray_initializeFromList = F2(function(max, ls) {
  var result = new Array(max);
  for (var i = 0; i < max && ls.b; i++) {
    result[i] = ls.a;
    ls = ls.b;
  }
  result.length = i;
  return _Utils_Tuple2(result, ls);
});
F2(function(index, array) {
  return array[index];
});
F3(function(index, value, array) {
  var length = array.length;
  var result = new Array(length);
  for (var i = 0; i < length; i++) {
    result[i] = array[i];
  }
  result[index] = value;
  return result;
});
F2(function(value, array) {
  var length = array.length;
  var result = new Array(length + 1);
  for (var i = 0; i < length; i++) {
    result[i] = array[i];
  }
  result[length] = value;
  return result;
});
F3(function(func, acc, array) {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    acc = A2(func, array[i], acc);
  }
  return acc;
});
var _JsArray_foldr = F3(function(func, acc, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    acc = A2(func, array[i], acc);
  }
  return acc;
});
F2(function(func, array) {
  var length = array.length;
  var result = new Array(length);
  for (var i = 0; i < length; i++) {
    result[i] = func(array[i]);
  }
  return result;
});
F3(function(func, offset, array) {
  var length = array.length;
  var result = new Array(length);
  for (var i = 0; i < length; i++) {
    result[i] = A2(func, offset + i, array[i]);
  }
  return result;
});
F3(function(from, to, array) {
  return array.slice(from, to);
});
F3(function(n, dest, source) {
  var destLen = dest.length;
  var itemsToCopy = n - destLen;
  if (itemsToCopy > source.length) {
    itemsToCopy = source.length;
  }
  var size = destLen + itemsToCopy;
  var result = new Array(size);
  for (var i = 0; i < destLen; i++) {
    result[i] = dest[i];
  }
  for (var i = 0; i < itemsToCopy; i++) {
    result[i + destLen] = source[i];
  }
  return result;
});
F2(function(tag, value) {
  return value;
});
F2(function(tag, value) {
  console.log(tag + ": " + _Debug_toString());
  return value;
});
function _Debug_toString(value) {
  return "<internals>";
}
function _Debug_crash(identifier) {
  throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
}
function _Utils_eq(x, y) {
  for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) {
  }
  return isEqual;
}
function _Utils_eqHelp(x, y, depth, stack) {
  if (x === y) {
    return true;
  }
  if (typeof x !== "object" || x === null || y === null) {
    typeof x === "function" && _Debug_crash(5);
    return false;
  }
  if (depth > 100) {
    stack.push(_Utils_Tuple2(x, y));
    return true;
  }
  if (x.$ < 0) {
    x = $elm$core$Dict$toList(x);
    y = $elm$core$Dict$toList(y);
  }
  for (var key in x) {
    if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
      return false;
    }
  }
  return true;
}
F2(_Utils_eq);
F2(function(a, b) {
  return !_Utils_eq(a, b);
});
function _Utils_cmp(x, y, ord) {
  if (typeof x !== "object") {
    return x === y ? 0 : x < y ? -1 : 1;
  }
  if (typeof x.$ === "undefined") {
    return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
  }
  for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {
  }
  return ord || (x.b ? 1 : y.b ? -1 : 0);
}
F2(function(a, b) {
  return _Utils_cmp(a, b) < 0;
});
F2(function(a, b) {
  return _Utils_cmp(a, b) < 1;
});
F2(function(a, b) {
  return _Utils_cmp(a, b) > 0;
});
F2(function(a, b) {
  return _Utils_cmp(a, b) >= 0;
});
F2(function(x, y) {
  var n = _Utils_cmp(x, y);
  return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});
var _Utils_Tuple0 = 0;
function _Utils_Tuple2(a, b) {
  return { a, b };
}
function _Utils_chr(c) {
  return c;
}
F2(_Utils_ap);
function _Utils_ap(xs, ys) {
  if (typeof xs === "string") {
    return xs + ys;
  }
  if (!xs.b) {
    return ys;
  }
  var root = _List_Cons(xs.a, ys);
  xs = xs.b;
  for (var curr = root; xs.b; xs = xs.b) {
    curr = curr.b = _List_Cons(xs.a, ys);
  }
  return root;
}
F2(function(a, b) {
  return a + b;
});
F2(function(a, b) {
  return a - b;
});
F2(function(a, b) {
  return a * b;
});
F2(function(a, b) {
  return a / b;
});
F2(function(a, b) {
  return a / b | 0;
});
F2(Math.pow);
F2(function(b, a) {
  return a % b;
});
F2(function(modulus, x) {
  var answer = x % modulus;
  return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
});
F2(Math.atan2);
var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_log = Math.log;
F2(function(a, b) {
  return a && b;
});
F2(function(a, b) {
  return a || b;
});
F2(function(a, b) {
  return a !== b;
});
F2(function(chr, str) {
  return chr + str;
});
function _String_uncons(string) {
  var word = string.charCodeAt(0);
  return !isNaN(word) ? $elm$core$Maybe$Just(55296 <= word && word <= 56319 ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))) : $elm$core$Maybe$Nothing;
}
F2(function(a, b) {
  return a + b;
});
F2(function(func, string) {
  var len = string.length;
  var array = new Array(len);
  var i = 0;
  while (i < len) {
    var word = string.charCodeAt(i);
    if (55296 <= word && word <= 56319) {
      array[i] = func(_Utils_chr(string[i] + string[i + 1]));
      i += 2;
      continue;
    }
    array[i] = func(_Utils_chr(string[i]));
    i++;
  }
  return array.join("");
});
F2(function(isGood, str) {
  var arr = [];
  var len = str.length;
  var i = 0;
  while (i < len) {
    var char = str[i];
    var word = str.charCodeAt(i);
    i++;
    if (55296 <= word && word <= 56319) {
      char += str[i];
      i++;
    }
    if (isGood(_Utils_chr(char))) {
      arr.push(char);
    }
  }
  return arr.join("");
});
F3(function(func, state, string) {
  var len = string.length;
  var i = 0;
  while (i < len) {
    var char = string[i];
    var word = string.charCodeAt(i);
    i++;
    if (55296 <= word && word <= 56319) {
      char += string[i];
      i++;
    }
    state = A2(func, _Utils_chr(char), state);
  }
  return state;
});
F3(function(func, state, string) {
  var i = string.length;
  while (i--) {
    var char = string[i];
    var word = string.charCodeAt(i);
    if (56320 <= word && word <= 57343) {
      i--;
      char = string[i] + char;
    }
    state = A2(func, _Utils_chr(char), state);
  }
  return state;
});
var _String_split = F2(function(sep, str) {
  return str.split(sep);
});
var _String_join = F2(function(sep, strs) {
  return strs.join(sep);
});
F3(function(start, end, str) {
  return str.slice(start, end);
});
F2(function(isGood, string) {
  var i = string.length;
  while (i--) {
    var char = string[i];
    var word = string.charCodeAt(i);
    if (56320 <= word && word <= 57343) {
      i--;
      char = string[i] + char;
    }
    if (isGood(_Utils_chr(char))) {
      return true;
    }
  }
  return false;
});
var _String_all = F2(function(isGood, string) {
  var i = string.length;
  while (i--) {
    var char = string[i];
    var word = string.charCodeAt(i);
    if (56320 <= word && word <= 57343) {
      i--;
      char = string[i] + char;
    }
    if (!isGood(_Utils_chr(char))) {
      return false;
    }
  }
  return true;
});
F2(function(sub, str) {
  return str.indexOf(sub) > -1;
});
F2(function(sub, str) {
  return str.indexOf(sub) === 0;
});
F2(function(sub, str) {
  return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
});
F2(function(sub, str) {
  var subLen = sub.length;
  if (subLen < 1) {
    return _List_Nil;
  }
  var i = 0;
  var is = [];
  while ((i = str.indexOf(sub, i)) > -1) {
    is.push(i);
    i = i + subLen;
  }
  return _List_fromArray(is);
});
function _String_fromNumber(number) {
  return number + "";
}
function _Char_toCode(char) {
  var code = char.charCodeAt(0);
  if (55296 <= code && code <= 56319) {
    return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
  }
  return code;
}
function _Json_succeed(msg) {
  return {
    $: 0,
    a: msg
  };
}
function _Json_decodePrim(decoder) {
  return { $: 2, b: decoder };
}
var _Json_decodeInt = _Json_decodePrim(function(value) {
  return typeof value !== "number" ? _Json_expecting("an INT", value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting("an INT", value);
});
F2(function(field, decoder) {
  return {
    $: 6,
    d: field,
    b: decoder
  };
});
F2(function(index, decoder) {
  return {
    $: 7,
    e: index,
    b: decoder
  };
});
function _Json_mapMany(f, decoders) {
  return {
    $: 9,
    f,
    g: decoders
  };
}
F2(function(callback, decoder) {
  return {
    $: 10,
    b: decoder,
    h: callback
  };
});
F2(function(f, d1) {
  return _Json_mapMany(f, [d1]);
});
F3(function(f, d1, d2) {
  return _Json_mapMany(f, [d1, d2]);
});
F4(function(f, d1, d2, d3) {
  return _Json_mapMany(f, [d1, d2, d3]);
});
F5(function(f, d1, d2, d3, d4) {
  return _Json_mapMany(f, [d1, d2, d3, d4]);
});
F6(function(f, d1, d2, d3, d4, d5) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});
F7(function(f, d1, d2, d3, d4, d5, d6) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});
F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});
F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});
F2(function(decoder, string) {
  try {
    var value = JSON.parse(string);
    return _Json_runHelp(decoder, value);
  } catch (e) {
    return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)));
  }
});
var _Json_run = F2(function(decoder, value) {
  return _Json_runHelp(decoder, _Json_unwrap(value));
});
function _Json_runHelp(decoder, value) {
  switch (decoder.$) {
    case 2:
      return decoder.b(value);
    case 5:
      return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);
    case 3:
      if (!_Json_isArray(value)) {
        return _Json_expecting("a LIST", value);
      }
      return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
    case 4:
      if (!_Json_isArray(value)) {
        return _Json_expecting("an ARRAY", value);
      }
      return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
    case 6:
      var field = decoder.d;
      if (typeof value !== "object" || value === null || !(field in value)) {
        return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
      }
      var result = _Json_runHelp(decoder.b, value[field]);
      return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
    case 7:
      var index = decoder.e;
      if (!_Json_isArray(value)) {
        return _Json_expecting("an ARRAY", value);
      }
      if (index >= value.length) {
        return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
      }
      var result = _Json_runHelp(decoder.b, value[index]);
      return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
    case 8:
      if (typeof value !== "object" || value === null || _Json_isArray(value)) {
        return _Json_expecting("an OBJECT", value);
      }
      var keyValuePairs = _List_Nil;
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          var result = _Json_runHelp(decoder.b, value[key]);
          if (!$elm$core$Result$isOk(result)) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
          }
          keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
        }
      }
      return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
    case 9:
      var answer = decoder.f;
      var decoders = decoder.g;
      for (var i = 0; i < decoders.length; i++) {
        var result = _Json_runHelp(decoders[i], value);
        if (!$elm$core$Result$isOk(result)) {
          return result;
        }
        answer = answer(result.a);
      }
      return $elm$core$Result$Ok(answer);
    case 10:
      var result = _Json_runHelp(decoder.b, value);
      return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
    case 11:
      var errors = _List_Nil;
      for (var temp = decoder.g; temp.b; temp = temp.b) {
        var result = _Json_runHelp(temp.a, value);
        if ($elm$core$Result$isOk(result)) {
          return result;
        }
        errors = _List_Cons(result.a, errors);
      }
      return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
    case 1:
      return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
    case 0:
      return $elm$core$Result$Ok(decoder.a);
  }
}
function _Json_runArrayDecoder(decoder, value, toElmValue) {
  var len = value.length;
  var array = new Array(len);
  for (var i = 0; i < len; i++) {
    var result = _Json_runHelp(decoder, value[i]);
    if (!$elm$core$Result$isOk(result)) {
      return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
    }
    array[i] = result.a;
  }
  return $elm$core$Result$Ok(toElmValue(array));
}
function _Json_isArray(value) {
  return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
}
function _Json_toElmArray(array) {
  return A2($elm$core$Array$initialize, array.length, function(i) {
    return array[i];
  });
}
function _Json_expecting(type, value) {
  return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)));
}
var _Json_encode = F2(function(indentLevel, value) {
  return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
});
function _Json_wrap(value) {
  return value;
}
function _Json_unwrap(value) {
  return value;
}
F3(function(key, value, object) {
  object[key] = _Json_unwrap(value);
  return object;
});
function _Scheduler_succeed(value) {
  return {
    $: 0,
    a: value
  };
}
function _Scheduler_binding(callback) {
  return {
    $: 2,
    b: callback,
    c: null
  };
}
var _Scheduler_andThen = F2(function(callback, task) {
  return {
    $: 3,
    b: callback,
    d: task
  };
});
F2(function(callback, task) {
  return {
    $: 4,
    b: callback,
    d: task
  };
});
function _Scheduler_receive(callback) {
  return {
    $: 5,
    b: callback
  };
}
var _Scheduler_guid = 0;
function _Scheduler_rawSpawn(task) {
  var proc = {
    $: 0,
    e: _Scheduler_guid++,
    f: task,
    g: null,
    h: []
  };
  _Scheduler_enqueue(proc);
  return proc;
}
function _Scheduler_rawSend(proc, msg) {
  proc.h.push(msg);
  _Scheduler_enqueue(proc);
}
var _Scheduler_send = F2(function(proc, msg) {
  return _Scheduler_binding(function(callback) {
    _Scheduler_rawSend(proc, msg);
    callback(_Scheduler_succeed(_Utils_Tuple0));
  });
});
var _Scheduler_working = false;
var _Scheduler_queue = [];
function _Scheduler_enqueue(proc) {
  _Scheduler_queue.push(proc);
  if (_Scheduler_working) {
    return;
  }
  _Scheduler_working = true;
  while (proc = _Scheduler_queue.shift()) {
    _Scheduler_step(proc);
  }
  _Scheduler_working = false;
}
function _Scheduler_step(proc) {
  while (proc.f) {
    var rootTag = proc.f.$;
    if (rootTag === 0 || rootTag === 1) {
      while (proc.g && proc.g.$ !== rootTag) {
        proc.g = proc.g.i;
      }
      if (!proc.g) {
        return;
      }
      proc.f = proc.g.b(proc.f.a);
      proc.g = proc.g.i;
    } else if (rootTag === 2) {
      proc.f.c = proc.f.b(function(newRoot) {
        proc.f = newRoot;
        _Scheduler_enqueue(proc);
      });
      return;
    } else if (rootTag === 5) {
      if (proc.h.length === 0) {
        return;
      }
      proc.f = proc.f.b(proc.h.shift());
    } else {
      proc.g = {
        $: rootTag === 3 ? 0 : 1,
        b: proc.f.b,
        i: proc.g
      };
      proc.f = proc.f.d;
    }
  }
}
function _Process_sleep(time) {
  return _Scheduler_binding(function(callback) {
    var id = setTimeout(function() {
      callback(_Scheduler_succeed(_Utils_Tuple0));
    }, time);
    return function() {
      clearTimeout(id);
    };
  });
}
var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args) {
  return _Platform_initialize(flagDecoder, args, impl.a4, impl.bp, impl.bl, function() {
    return function() {
    };
  });
});
function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
  var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args["flags"] : void 0));
  $elm$core$Result$isOk(result) || _Debug_crash(2);
  var managers = {};
  var initPair = init(result.a);
  var model = initPair.a;
  var stepper = stepperBuilder(sendToApp, model);
  var ports = _Platform_setupEffects(managers, sendToApp);
  function sendToApp(msg, viewMetadata) {
    var pair = A2(update, msg, model);
    stepper(model = pair.a, viewMetadata);
    _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
  }
  _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
  return ports ? { ports } : {};
}
var _Platform_effectManagers = {};
function _Platform_setupEffects(managers, sendToApp) {
  var ports;
  for (var key in _Platform_effectManagers) {
    var manager = _Platform_effectManagers[key];
    if (manager.a) {
      ports = ports || {};
      ports[key] = manager.a(key, sendToApp);
    }
    managers[key] = _Platform_instantiateManager(manager, sendToApp);
  }
  return ports;
}
function _Platform_instantiateManager(info, sendToApp) {
  var router = {
    g: sendToApp,
    h: void 0
  };
  var onEffects = info.c;
  var onSelfMsg = info.d;
  var cmdMap = info.e;
  var subMap = info.f;
  function loop(state) {
    return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
      var value = msg.a;
      if (msg.$ === 0) {
        return A3(onSelfMsg, router, value, state);
      }
      return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
    }));
  }
  return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}
F2(function(router, msg) {
  return _Scheduler_binding(function(callback) {
    router.g(msg);
    callback(_Scheduler_succeed(_Utils_Tuple0));
  });
});
F2(function(router, msg) {
  return A2(_Scheduler_send, router.h, {
    $: 0,
    a: msg
  });
});
function _Platform_leaf(home) {
  return function(value) {
    return {
      $: 1,
      k: home,
      l: value
    };
  };
}
function _Platform_batch(list) {
  return {
    $: 2,
    m: list
  };
}
F2(function(tagger, bag) {
  return {
    $: 3,
    n: tagger,
    o: bag
  };
});
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;
function _Platform_enqueueEffects(managers, cmdBag, subBag) {
  _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });
  if (_Platform_effectsActive)
    return;
  _Platform_effectsActive = true;
  for (var fx; fx = _Platform_effectsQueue.shift(); ) {
    _Platform_dispatchEffects(fx.p, fx.q, fx.r);
  }
  _Platform_effectsActive = false;
}
function _Platform_dispatchEffects(managers, cmdBag, subBag) {
  var effectsDict = {};
  _Platform_gatherEffects(true, cmdBag, effectsDict, null);
  _Platform_gatherEffects(false, subBag, effectsDict, null);
  for (var home in managers) {
    _Scheduler_rawSend(managers[home], {
      $: "fx",
      a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
    });
  }
}
function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
  switch (bag.$) {
    case 1:
      var home = bag.k;
      var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
      effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
      return;
    case 2:
      for (var list = bag.m; list.b; list = list.b) {
        _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
      }
      return;
    case 3:
      _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
        s: bag.n,
        t: taggers
      });
      return;
  }
}
function _Platform_toEffect(isCmd, home, taggers, value) {
  function applyTaggers(x) {
    for (var temp = taggers; temp; temp = temp.t) {
      x = temp.s(x);
    }
    return x;
  }
  var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
  return A2(map, applyTaggers, value);
}
function _Platform_insert(isCmd, newEffect, effects) {
  effects = effects || { i: _List_Nil, j: _List_Nil };
  isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
  return effects;
}
function _Platform_checkPortName(name) {
  if (_Platform_effectManagers[name]) {
    _Debug_crash(3);
  }
}
function _Platform_outgoingPort(name, converter) {
  _Platform_checkPortName(name);
  _Platform_effectManagers[name] = {
    e: _Platform_outgoingPortMap,
    u: converter,
    a: _Platform_setupOutgoingPort
  };
  return _Platform_leaf(name);
}
var _Platform_outgoingPortMap = F2(function(tagger, value) {
  return value;
});
function _Platform_setupOutgoingPort(name) {
  var subs = [];
  var converter = _Platform_effectManagers[name].u;
  var init = _Process_sleep(0);
  _Platform_effectManagers[name].b = init;
  _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
    for (; cmdList.b; cmdList = cmdList.b) {
      var currentSubs = subs;
      var value = _Json_unwrap(converter(cmdList.a));
      for (var i = 0; i < currentSubs.length; i++) {
        currentSubs[i](value);
      }
    }
    return init;
  });
  function subscribe(callback) {
    subs.push(callback);
  }
  function unsubscribe(callback) {
    subs = subs.slice();
    var index = subs.indexOf(callback);
    if (index >= 0) {
      subs.splice(index, 1);
    }
  }
  return {
    subscribe,
    unsubscribe
  };
}
function _Platform_incomingPort(name, converter) {
  _Platform_checkPortName(name);
  _Platform_effectManagers[name] = {
    f: _Platform_incomingPortMap,
    u: converter,
    a: _Platform_setupIncomingPort
  };
  return _Platform_leaf(name);
}
var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
  return function(value) {
    return tagger(finalTagger(value));
  };
});
function _Platform_setupIncomingPort(name, sendToApp) {
  var subs = _List_Nil;
  var converter = _Platform_effectManagers[name].u;
  var init = _Scheduler_succeed(null);
  _Platform_effectManagers[name].b = init;
  _Platform_effectManagers[name].c = F3(function(router, subList, state) {
    subs = subList;
    return init;
  });
  function send(incomingValue) {
    var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
    $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
    var value = result.a;
    for (var temp = subs; temp.b; temp = temp.b) {
      sendToApp(temp.a(value));
    }
  }
  return { send };
}
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$LT = 0;
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
F3(function(func, baseCase, _v0) {
  var tree = _v0.c;
  var tail = _v0.d;
  var helper = F2(function(node, acc) {
    if (!node.$) {
      var subTree = node.a;
      return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
    } else {
      var values = node.a;
      return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
    }
  });
  return A3($elm$core$Elm$JsArray$foldr, helper, A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree);
});
var $elm$core$Dict$foldr = F3(function(func, acc, t) {
  foldr:
    while (true) {
      if (t.$ === -2) {
        return acc;
      } else {
        var key = t.b;
        var value = t.c;
        var left = t.d;
        var right = t.e;
        var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldr, func, acc, right)), $temp$t = left;
        func = $temp$func;
        acc = $temp$acc;
        t = $temp$t;
        continue foldr;
      }
    }
});
var $elm$core$Dict$toList = function(dict) {
  return A3($elm$core$Dict$foldr, F3(function(key, value, list) {
    return A2($elm$core$List$cons, _Utils_Tuple2(key, value), list);
  }), _List_Nil, dict);
};
var $elm$core$Basics$GT = 2;
var $elm$core$Result$Err = function(a) {
  return { $: 1, a };
};
var $elm$json$Json$Decode$Failure = F2(function(a, b) {
  return { $: 3, a, b };
});
var $elm$json$Json$Decode$Field = F2(function(a, b) {
  return { $: 0, a, b };
});
var $elm$json$Json$Decode$Index = F2(function(a, b) {
  return { $: 1, a, b };
});
var $elm$core$Result$Ok = function(a) {
  return { $: 0, a };
};
var $elm$json$Json$Decode$OneOf = function(a) {
  return { $: 2, a };
};
var $elm$core$Maybe$Just = function(a) {
  return { $: 0, a };
};
var $elm$core$Maybe$Nothing = { $: 1 };
var $elm$core$String$all = _String_all;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(function(sep, chunks) {
  return A2(_String_join, sep, _List_toArray(chunks));
});
var $elm$core$String$split = F2(function(sep, string) {
  return _List_fromArray(A2(_String_split, sep, string));
});
var $elm$json$Json$Decode$indent = function(str) {
  return A2($elm$core$String$join, "\n    ", A2($elm$core$String$split, "\n", str));
};
var $elm$core$List$foldl = F3(function(func, acc, list) {
  foldl:
    while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;
        var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
        func = $temp$func;
        acc = $temp$acc;
        list = $temp$list;
        continue foldl;
      }
    }
});
var $elm$core$List$length = function(xs) {
  return A3($elm$core$List$foldl, F2(function(_v0, i) {
    return i + 1;
  }), 0, xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$List$rangeHelp = F3(function(lo, hi, list) {
  rangeHelp:
    while (true) {
      if (_Utils_cmp(lo, hi) < 1) {
        var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
        lo = $temp$lo;
        hi = $temp$hi;
        list = $temp$list;
        continue rangeHelp;
      } else {
        return list;
      }
    }
});
var $elm$core$List$range = F2(function(lo, hi) {
  return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
});
var $elm$core$List$indexedMap = F2(function(f, xs) {
  return A3($elm$core$List$map2, f, A2($elm$core$List$range, 0, $elm$core$List$length(xs) - 1), xs);
});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function(_char) {
  var code = $elm$core$Char$toCode(_char);
  return 97 <= code && code <= 122;
};
var $elm$core$Char$isUpper = function(_char) {
  var code = $elm$core$Char$toCode(_char);
  return code <= 90 && 65 <= code;
};
var $elm$core$Char$isAlpha = function(_char) {
  return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function(_char) {
  var code = $elm$core$Char$toCode(_char);
  return code <= 57 && 48 <= code;
};
var $elm$core$Char$isAlphaNum = function(_char) {
  return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function(list) {
  return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(function(i, error) {
  return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
});
var $elm$json$Json$Decode$errorToString = function(error) {
  return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(function(error, context) {
  errorToStringHelp:
    while (true) {
      switch (error.$) {
        case 0:
          var f = error.a;
          var err = error.b;
          var isSimple = function() {
            var _v1 = $elm$core$String$uncons(f);
            if (_v1.$ === 1) {
              return false;
            } else {
              var _v2 = _v1.a;
              var _char = _v2.a;
              var rest = _v2.b;
              return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
            }
          }();
          var fieldName = isSimple ? "." + f : "['" + (f + "']");
          var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
          error = $temp$error;
          context = $temp$context;
          continue errorToStringHelp;
        case 1:
          var i = error.a;
          var err = error.b;
          var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
          var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
          error = $temp$error;
          context = $temp$context;
          continue errorToStringHelp;
        case 2:
          var errors = error.a;
          if (!errors.b) {
            return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
              if (!context.b) {
                return "!";
              } else {
                return " at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
              }
            }();
          } else {
            if (!errors.b.b) {
              var err = errors.a;
              var $temp$error = err, $temp$context = context;
              error = $temp$error;
              context = $temp$context;
              continue errorToStringHelp;
            } else {
              var starter = function() {
                if (!context.b) {
                  return "Json.Decode.oneOf";
                } else {
                  return "The Json.Decode.oneOf at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                }
              }();
              var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
              return A2($elm$core$String$join, "\n\n", A2($elm$core$List$cons, introduction, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
            }
          }
        default:
          var msg = error.a;
          var json = error.b;
          var introduction = function() {
            if (!context.b) {
              return "Problem with the given value:\n\n";
            } else {
              return "Problem with the value at json" + (A2($elm$core$String$join, "", $elm$core$List$reverse(context)) + ":\n\n    ");
            }
          }();
          return introduction + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json)) + ("\n\n" + msg));
      }
    }
});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(function(a, b, c, d) {
  return { $: 0, a, b, c, d };
});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$logBase = F2(function(base, number) {
  return _Basics_log(number) / _Basics_log(base);
});
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function(a) {
  return { $: 1, a };
};
F2(function(f, x) {
  return f(x);
});
F2(function(x, f) {
  return f(x);
});
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$max = F2(function(x, y) {
  return _Utils_cmp(x, y) > 0 ? x : y;
});
var $elm$core$Array$SubTree = function(a) {
  return { $: 0, a };
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(function(nodes, acc) {
  compressNodes:
    while (true) {
      var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
      var node = _v0.a;
      var remainingNodes = _v0.b;
      var newAcc = A2($elm$core$List$cons, $elm$core$Array$SubTree(node), acc);
      if (!remainingNodes.b) {
        return $elm$core$List$reverse(newAcc);
      } else {
        var $temp$nodes = remainingNodes, $temp$acc = newAcc;
        nodes = $temp$nodes;
        acc = $temp$acc;
        continue compressNodes;
      }
    }
});
var $elm$core$Array$treeFromBuilder = F2(function(nodeList, nodeListSize) {
  treeFromBuilder:
    while (true) {
      var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
      if (newNodeSize === 1) {
        return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
      } else {
        var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue treeFromBuilder;
      }
    }
});
var $elm$core$Array$builderToArray = F2(function(reverseNodeList, builder) {
  if (!builder.b) {
    return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.d), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.d);
  } else {
    var treeLen = builder.b * $elm$core$Array$branchFactor;
    var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
    var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.e) : builder.e;
    var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.b);
    return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.d) + treeLen, A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep), tree, builder.d);
  }
});
var $elm$core$Array$initializeHelp = F5(function(fn, fromIndex, len, nodeList, tail) {
  initializeHelp:
    while (true) {
      if (fromIndex < 0) {
        return A2($elm$core$Array$builderToArray, false, { e: nodeList, b: len / $elm$core$Array$branchFactor | 0, d: tail });
      } else {
        var leaf = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
        var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
        fn = $temp$fn;
        fromIndex = $temp$fromIndex;
        len = $temp$len;
        nodeList = $temp$nodeList;
        tail = $temp$tail;
        continue initializeHelp;
      }
    }
});
var $elm$core$Array$initialize = F2(function(len, fn) {
  if (len <= 0) {
    return $elm$core$Array$empty;
  } else {
    var tailLen = len % $elm$core$Array$branchFactor;
    var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
    var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
    return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
  }
});
var $elm$core$Result$isOk = function(result) {
  if (!result.$) {
    return true;
  } else {
    return false;
  }
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Worker$init = function(_v0) {
  return _Utils_Tuple2(0, $elm$core$Platform$Cmd$none);
};
var $author$project$Worker$Decrement = function(a) {
  return { $: 1, a };
};
var $author$project$Worker$Increment = function(a) {
  return { $: 0, a };
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Worker$decrement = _Platform_incomingPort("decrement", $elm$json$Json$Decode$int);
var $author$project$Worker$increment = _Platform_incomingPort("increment", $elm$json$Json$Decode$int);
var $author$project$Worker$subscriptions = function(_v0) {
  return $elm$core$Platform$Sub$batch(_List_fromArray([
    $author$project$Worker$increment($author$project$Worker$Increment),
    $author$project$Worker$decrement($author$project$Worker$Decrement)
  ]));
};
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Worker$sendCount = _Platform_outgoingPort("sendCount", $elm$json$Json$Encode$int);
var $author$project$Worker$update = F2(function(msg, _v0) {
  if (!msg.$) {
    var _int = msg.a;
    return _Utils_Tuple2(0, $author$project$Worker$sendCount(_int + 1));
  } else {
    var _int = msg.a;
    return _Utils_Tuple2(0, $author$project$Worker$sendCount(_int - 1));
  }
});
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Worker$main = $elm$core$Platform$worker({ a4: $author$project$Worker$init, bl: $author$project$Worker$subscriptions, bp: $author$project$Worker$update });
const Elm = { "Worker": { "init": $author$project$Worker$main($elm$json$Json$Decode$succeed(0))(0) } };
const app = Elm.Worker.init();
export { app as default };
