//
//  RNViewController.m
//  Jump
//
//  Created by FOODING on 16/12/1451.
//  Copyright © 2016年 Noohle. All rights reserved.
//

#import "RNViewController.h"
#import "RCTRootView.h"
#import "RCTBridgeModule.h"
#import "NativeViewController.h"
#import "AppDelegate.h"

@interface RNViewController ()<RCTBridgeModule>
{
    
}

@end

@implementation RNViewController

RCT_EXPORT_MODULE(NativeVC);

RCT_EXPORT_METHOD(goToNextVCWith:(NSString *)aStr result:(RCTResponseSenderBlock)callback)
{
    [self goToNextWith:aStr];
    callback(@[[NSNull null], @"跳转并传递参数成功"]);
    
}

- (void)goToNextWith:(NSString *)aStr {
    
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
        NativeViewController *VC = [[NativeViewController alloc] init];
        VC.paramsString = aStr;
        VC.title = @"NativeVC";
        [app.navi pushViewController:VC animated:YES];
    });
   
  
}



- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    NSDictionary *dic = @{@"paramsString": self.textString};
    
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"Jump"
                         initialProperties : dic
                          launchOptions    : nil];
    
    self.view = rootView;
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
