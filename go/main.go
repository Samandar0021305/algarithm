// package crawler

// import (
// 	"bufio"
// 	"bytes"
// 	"errors"
// 	"fmt"
// 	"io/ioutil"
// 	"os"
// 	"path/filepath"
// 	"strings"

// 	"github.com/pilebones/go-udev/netlink"
// )

// const (
// 	BASE_DEVPATH = "/sys/devices"
// )

// type Device struct {
// 	KObj string
// 	Env  map[string]string
// }

// // ExistingDevices return all plugged devices matched by the matcher
// // All uevent files inside /sys/devices is crawled to match right env values
// func ExistingDevices(queue chan Device, errs chan error, matcher netlink.Matcher) chan struct{} {
// 	quit := make(chan struct{}, 1)

// 	if matcher != nil {
// 		if err := matcher.Compile(); err != nil {
// 			errs <- fmt.Errorf("Wrong matcher, err: %w", err)
// 			quit <- struct{}{}
// 			close(queue)
// 			return quit
// 		}
// 	}

// 	go func() {
// 		err := filepath.Walk(BASE_DEVPATH, func(path string, info os.FileInfo, err error) error {
// 			select {
// 			case <-quit:
// 				return errors.New("abort signal receive")
// 			default:
// 				if err != nil {
// 					return err
// 				}

// 				if info.IsDir() || info.Name() != "uevent" {
// 					return nil
// 				}

// 				env, err := getEventFromUEventFile(path)
// 				if err != nil {
// 					return err
// 				}

// 				kObj := filepath.Dir(path)

// 				// Append to env subsystem if existing
// 				if link, err := os.Readlink(kObj + "/subsystem"); err == nil {
// 					env["SUBSYSTEM"] = filepath.Base(link)
// 				}

// 				if matcher == nil || matcher.EvaluateEnv(env) {
// 					queue <- Device{
// 						KObj: kObj,
// 						Env:  env,
// 					}
// 				}
// 				return nil
// 			}
// 		})

// 		if err != nil {
// 			errs <- err
// 		}

// 		close(queue)
// 	}()
// 	return quit
// }

// // getEventFromUEventFile return all env var define in file
// // syntax: name=value for each line
// // Fonction use for /sys/.../uevent files
// func getEventFromUEventFile(path string) (map[string]string, error) {
// 	f, err := os.Open(path)
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer f.Close()

// 	data, err := ioutil.ReadAll(f)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return getEventFromUEventData(data), nil
// }

// func getEventFromUEventData(data []byte) map[string]string {
// 	rv := make(map[string]string)
// 	buf := bufio.NewScanner(bytes.NewBuffer(data))
// 	for buf.Scan() {
// 		field := strings.SplitN(buf.Text(), "=", 2)
// 		if len(field) != 2 {
// 			return rv // TODO: return error ?
// 		}
// 		rv[field[0]] = field[1]
// 	}
// 	return rv
// }

// package main

// import (
// 	"fmt"
// 	"reflect"
// )

// func main(){
// 	fmt.Println("hello playground")
// 	// fmt.Println(math.Floor(2.34))
// 	fmt.Println("A")
// 	fmt.Println(reflect.TypeOf(1))
// 	fmt.Println(reflect.TypeOf(1.5))
// }


// package main

// import (
// 	"fmt"
// )



// // func main(
// // var d int

// // fmt.Scan(&d)

	
// // )


// // package main

// // import (
// // 	"fmt"
// // )

// // func main()
// // var x int 
// // var y int
// // fmt.Scanln(&x)
// // fmt.Scan(&y)
// // sum := x + y
// // fmt.Println(sum)
// // }